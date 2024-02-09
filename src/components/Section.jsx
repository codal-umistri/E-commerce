import { Flex, Image, Typography, Row, Col } from "antd";
const { Text } = Typography;

const Section = () => { 
  return (
    <Row className="section-container" justify="space-around">
      <Col span={23}>
        <Flex
          style={{
            marginTop: "0.72rem",
            backgroundColor: "white",
          }}
          justify="space-evenly"
          align="center"
        >
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Grocery</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text> Mobiles</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Fashion</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Electronics</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Home & Furniture </Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=10"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Appliances</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>AirLine</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Beauty,Toys& More</Text>
          </Flex>
          <Flex className="section-item" vertical>
            <Image
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
              alt=""
              preview={false}
              height={66}
              width={66}
              className="img"
            />
            <Text>Two Wheelers</Text>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default Section;





// Dynamic


// import { useState, useEffect } from "react";
// import { Flex, Image, Typography, Row, Col } from "antd";
// const { Text } = Typography;

// const Section = () => {
//   const [category, Setcategory] = useState([]);


//    useEffect(()=>
//    {
//     const controller = new AbortController();
//     const signal =  controller.signal;
//     fetch("https://api.escuelajs.co/api/v1/categories?limit=6").then(res => res.json()).then((data)=>
//     {
//       Setcategory(data)
//     })

//     return () =>{
//         controller.abort();
//     }

//    },[])
//   return (
//     <Row className="section-container" justify="space-around">
//       <Col span={23}>
//         <Flex
//           style={{
//             marginTop: "0.73rem",
//             backgroundColor: "white",
//           }}
//           justify="space-around"
//           align="center"
//         >
//           {category.length && category.map((cat)=> (
//             <Flex className="section-item" vertical>
//             <Image
//               src={cat.image}
//               alt=""
//               preview={false}
//               height={66}
//               width={66}
//               className="img"
//             />
//             <Text>{cat.name}</Text>
//           </Flex>
//           ))}
//         </Flex>
//       </Col>
//     </Row>
//   );
// };

// export default Section;

