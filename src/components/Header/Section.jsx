import { Flex, Image, Typography, Row, Col } from "antd";
import { SECTIONDATA } from "../Constants/Items";
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
          {SECTIONDATA.map((item) => {
            return (
              <Flex className="section-item" vertical>
                <Image
                  src={item.url}
                  preview={false}
                  height={66}
                  width={66}
                  className="img"
                />
                <Text>{item.cat_name}</Text>
              </Flex>
            );
          })}
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
