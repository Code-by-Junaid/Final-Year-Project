// src/pages/Contact.js
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Input, Button, Card, Typography, Row, Col, Divider } from "antd";
import { Fade } from "react-awesome-reveal";

const { Title, Paragraph, Text } = Typography;

function Contact() {
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
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  padding: "40px",
                  background: "#fff",
                }}
              >
                <Title level={2} style={{ textAlign: "center", color: "#d07d6a" }}>
                  Get in Touch
                </Title>
                <Divider />

                <Paragraph style={{ textAlign: "center", marginBottom: 40 }}>
                  Have questions about our cars, interested in a partnership, or need assistance with something?
We’re always here to help! Whether you’re exploring rental options, looking to collaborate with us, or just want to say hello — don’t hesitate to reach out. Our team is passionate about delivering the best experience possible, and we’d love to hear from you. Simply drop us a message and we’ll get back to you as soon as we can!
                </Paragraph>

                {/* Contact Form - sends email to backend */}
                <Form layout="vertical" onFinish={async (values) => {
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(values)
                    });
                    const data = await response.json();
                    if (data.success) {
                      alert('Message sent successfully!');
                    } else {
                      alert(data.error || 'Failed to send message.');
                    }
                  } catch (err) {
                    alert('Failed to send message.');
                  }
                }}>
                  <Form.Item
                    name="name"
                    label="Your Name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Enter a valid email address" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Your Message"
                    rules={[{ required: true, message: "Please enter your message" }]}
                  >
                    <Input.TextArea rows={4} placeholder="Write your message here..." />
                  </Form.Item>

                  <Form.Item style={{ textAlign: "center", marginTop: "30px" }}>
                    <Button type="primary" htmlType="submit" size="large">
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>

                <Divider />

                <div style={{ textAlign: "center" }}>
                  <Text type="secondary">📞 +92 313 4804988</Text>
                  <br />
                  <Text type="secondary">✉️ developerjunaid0@gmil.com</Text>
                </div>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default Contact;
