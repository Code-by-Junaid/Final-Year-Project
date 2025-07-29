// src/pages/About.js
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Typography, Card, Row, Col, Divider } from "antd";
import { Fade } from "react-awesome-reveal";

const { Title, Paragraph } = Typography;

function About() {
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
                  About Rent Cars
                </Title>
                <Divider />

                <Typography style={{ fontSize: "16px", color: "#444", lineHeight: "1.8" }}>
                  <Paragraph>
                    <strong>Rent Cars</strong> is your trusted partner in modern car rentals. Our
                    platform is designed for <strong>speed</strong>, <strong>simplicity</strong>, and{" "}
                    <strong>safety</strong> — helping you book a ride in just a few clicks, with no
                    hidden fees or stress.
                  </Paragraph>

                  <Paragraph>
                    Whether you're planning a weekend escape, business travel, or a quick trip
                    around the city, <strong>Rent Cars</strong> offers a flexible and affordable
                    vehicle range to fit your needs.
                  </Paragraph>

                  <Paragraph>
                    We believe renting a car should be <strong>easy</strong>,{" "}
                    <strong>enjoyable</strong>, and <strong>accessible</strong>. Our smart platform
                    continues to evolve with the latest tech, making your journey smoother every
                    step of the way.
                  </Paragraph>

                  <Paragraph>
                    Join thousands of happy customers and enjoy peace of mind on every ride —{" "}
                    <strong>Rent Cars</strong> is with you, wherever the road leads.
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

export default About;
