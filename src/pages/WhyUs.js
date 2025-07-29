// import React from "react";
// import DefaultLayout from "../components/DefaultLayout";
// import { CheckCircleOutlined } from "@ant-design/icons";

// function WhyUs() {
//   return (
//     <DefaultLayout>
//       <div className="p-5">
//         <h1>Why Choose Jadi Cars?</h1>
//         <p>
//           At Jadi Cars, we go the extra mile to give you the best car rental experience.
//           Here’s why thousands of customers trust us:
//         </p>

//         <ul className="mt-4" style={{ listStyle: "none", paddingLeft: 0 }}>
//           <li><CheckCircleOutlined /> Wide range of vehicles for every budget</li>
//           <li><CheckCircleOutlined /> Affordable hourly rental rates</li>
//           <li><CheckCircleOutlined /> Easy online booking with instant confirmation</li>
//           <li><CheckCircleOutlined /> 24/7 customer support and roadside assistance</li>
//           <li><CheckCircleOutlined /> Well-maintained and clean cars</li>
//           <li><CheckCircleOutlined /> Optional professional driver service</li>
//         </ul>

//         <p className="mt-4">
//           Rent with confidence. Rent with Jadi Cars.
//         </p>
//       </div>
//     </DefaultLayout>
//   );
// }

// export default WhyUs;



// src/pages/WhyUs.js
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Typography, Card, Row, Col, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";

const { Title, Paragraph } = Typography;

function WhyUs() {
  return (
    <DefaultLayout>
      <div style={{ padding: "40px 20px", background: "#fdf4ef", minHeight: "100vh" }}>
        <Row justify="center">
          <Col xs={24} sm={22} md={20} lg={16} xl={14}>
            <Fade direction="up" triggerOnce>
              <Card
                bordered={false}
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  padding: "40px",
                  background: "#fff",
                }}
              >
                <Title level={2} style={{ textAlign: "center", color: "#d07d6a" }}>
                  Why Choose Rent Cars?
                </Title>
                <Divider />

                <Typography style={{ fontSize: "16px", color: "#444", lineHeight: "1.8" }}>
                  <Paragraph>
                    At <strong>Rent Cars</strong>, we go the extra mile to give you the best car rental
                    experience. Here’s why customers trust us:
                  </Paragraph>

                  <ul style={{ paddingLeft: "1em", marginBottom: "1em" }}>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      Wide range of vehicles for every budget
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      Affordable hourly rental rates
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      Easy online booking with instant confirmation
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      24/7 customer support and roadside assistance
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      Well-maintained and clean cars
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ color: "#fa8c16", marginRight: 8 }} />
                      Optional professional driver service
                    </li>
                  </ul>

                  <Paragraph>
                    Rent with <strong>confidence</strong>. Rent with <strong>Rent Cars</strong>.
                  </Paragraph>
                </Typography>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default WhyUs;

