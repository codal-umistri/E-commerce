// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// eslint-disable-next-line no-undef
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const COUPENCODE = [
  {
    Code: "ABC",
    discountPercentage: 25,
  },
  {
    Code: "BCD",
    discountPercentage: 15,
  },
  {
    Code: "CDE",
    discountPercentage: 10,
  },
  {
    Code: "XYZ",
    discountPercentage: 5,
  },
];

app.post("/api/v1/create-checkout-session", async (req, res) => {
  const { products, promoCode } = req.body;

  const CoupenDiscount = promoCode
    ? COUPENCODE.find((item) => item.Code === promoCode)
    : null;

  const lineItems = products.map((product) => {
    let unitPrice = product.item.price * product.quantity;
    if (product.item.discountPercentage) {
      unitPrice -= Math.round(
        (unitPrice * product.item.discountPercentage) / 100
      );
    }
    if (CoupenDiscount) {
      unitPrice -= (unitPrice * CoupenDiscount.discountPercentage) / 100;
    }
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.item.title,
          images: [product.item.images[0]],
        },
        unit_amount: Math.round(unitPrice * 100),
      },
      quantity: product.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
      },
      billing_address_collection: "auto",
      line_items: lineItems,
      mode: "payment",
      // eslint-disable-next-line no-undef
      success_url: process.env.SUCCESS_URL,
      // eslint-disable-next-line no-undef
      cancel_url: process.env.CANCEL_URL,
    });
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while creating session");
  }
});

app.listen(4040, (req, res) => {
  console.log("App is running");
});
