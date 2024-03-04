const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51OqXAgSINGykgmo3WnHByaJLJ1QXMFZKoSZtWe4wWQCcBefP03qVG1Oywhif7HB0ayxqbhhqeZsYeJKUjAJ4iZ9u00ajtAcFBs"
);
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/create-checkout-session", async (req, res) => {
  const { products, promoCode } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.item.title,
        images: [product.item.images[0]],
      },
      unit_amount: Math.round(product.item.price * 100),
    },
    quantity: product.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
      },
      billing_address_collection: "auto",
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/",
      cancel_url: "http://localhost:5173/allproducts",
    });
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4040, (req, res) => {
  console.log("App is running");
});
