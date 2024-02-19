import { useState, useEffect } from "react";
import { Flex, Row, Col } from "antd";
import Dividers from "../Divider/Divders";
import MultipleProductCard from "./MultipleProductCard";

const MultipleProductCards = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/products?skip=6&limit=8", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        SetData(data.products);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {/* <Dividers tag={"Top Offers"} /> */}
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Flex justify="space-evenly" wrap="wrap">
            {Array.isArray(Data) &&
              Data.map((item) => (
                <MultipleProductCard key={item.id} item={item} />
              ))}
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default MultipleProductCards;






// import { Flex, Row, Col } from "antd";
// import { CARDDATA } from "../Constants/Items";
// import Dividers from "../Divider/Divders";
// import MultipleProductCard from "./MultipleProductCard";

// const MultipleProductCards = () => {

//   return (
//     <>
//       <Dividers tag={"Top Offers"} />
//       <Row style={{ marginTop: "2rem" }}>
//         <Col span={24}>
//           <Flex justify="space-evenly" wrap="wrap">
//             {CARDDATA.map((item) => {
//               return <MultipleProductCard key={item.id} item={item} />;
//             })}
//           </Flex>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default MultipleProductCards;
