import React, { useState } from "react";
import { Row, Col, Button, Drawer, Menu, Layout, Typography, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

function DefaultLayout(props) {
  const [visible, setVisible] = useState(false);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.role === "admin";

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const comingSoon = (label) => (
    <Tooltip title="Coming Soon" placement="right">
      <span style={{ cursor: 'not-allowed', color: '#999' }}>{label}</span>
    </Tooltip>
  );

  // Unified menu items for both desktop and mobile
  const getMenuItems = () => {
    const logoutButton = (
      <Button
        onClick={logout}
        type="primary"
        danger
        style={{ background: 'orangered', border: 'none', fontWeight: 600, borderRadius: 20, padding: '0 20px', color: '#fff', boxShadow: '0 2px 8px rgba(255,69,0,0.15)' }}
        className="logout-btn"
      >
        Logout
      </Button>
    );
    if (isAdmin) {
      return [
        { key: "admin", label: <Link to="/admin">Admin</Link> },
        { key: "adminbookings", label: <Link to="/adminbookings">Bookings</Link> },
        { key: "logout", label: logoutButton },
      ];
    } else {
      return [
        { key: "home", label: <Link to="/">Home</Link> },
        { key: "about", label: <Link to="/about">About Us</Link> },
        { key: "contact", label: <Link to="/contact">Contact Us</Link> },
        { key: "userbookings", label: <Link to="/userbookings">Bookings</Link> },
        { key: "whyus", label: <Link to="/whyus">Why Us</Link> },
        { key: "logout", label: logoutButton },
      ];
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="header bs1" style={{ padding: '10px 20px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <h1 style={{ margin: 0 }}>
              <b><Link to="/" style={{ color: 'orangered' }}>RentCars</Link></b>
            </h1>
          </Col>

          {/* Desktop Menu */}
          <Col className="desktop-menu">
            <ul className="nav-links">
              {getMenuItems().map(item => (
                <li key={item.key}>{item.label}</li>
              ))}
            </ul>
          </Col>

          {/* Mobile Menu Button */}
          <Col className="mobile-menu-icon">
            <Button icon={<MenuOutlined />} onClick={() => setVisible(true)} />
          </Col>
        </Row>
      </div>

      {/* Drawer for Mobile View */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical" onClick={() => setVisible(false)} selectable={false} style={{ border: 'none' }}>
          {getMenuItems().map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>

      {/* Main Content */}
      <div className="content">{props.children}</div>

      {/* Footer */}
      <Footer style={{ background: '#fff', padding: '40px', borderTop: '1px solid #eee' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <img src="" alt="logo" width={50} />
            <Title level={4} style={{ marginTop: 10 }}>RentCars</Title>
            <Title level={5}>Social network</Title>
            <Space size="middle">
              <FacebookFilled style={{ fontSize: 24 }} />
              <InstagramFilled style={{ fontSize: 24 }} />
              <YoutubeFilled style={{ fontSize: 24 }} />
              <TwitterCircleFilled style={{ fontSize: 24 }} />
            </Space>
          </Col>

          <Col xs={12} md={4}>
            <Title level={5}>About Us</Title>
            <Space direction="vertical">
              <Link to="/about">About Us</Link>
              {comingSoon("Our Advantageous")}
              {comingSoon("Our Goal")}
              <Link to="/contact">Support</Link>
            </Space>
          </Col>

          <Col xs={12} md={4}>
            <Title level={5}>Possibilities</Title>
            <Space direction="vertical">
              {comingSoon("Premium")}
              {comingSoon("Jobs")}
              {comingSoon("Parents")}
              {comingSoon("Business")}
            </Space>
          </Col>

          <Col xs={12} md={4}>
            <Title level={5}>Explore</Title>
            <Space direction="vertical">
              {comingSoon("Our Mission")}
              {comingSoon("Our Team")}
              {comingSoon("Careers")}
            </Space>
          </Col>

          <Col xs={12} md={6}>
            <Title level={5}>Support</Title>
            <Space direction="vertical">
              {comingSoon("How it works")}
              {comingSoon("Help Centre")}
              <Link to="/contact">Contact us</Link>
              <Link to="/whyus">Why Us</Link>
            </Space>
          </Col>
        </Row>

        <div style={{ marginTop: 40, borderTop: '1px solid #eee', paddingTop: 20, textAlign: 'center' }}>
          <Text>
            © 2025 RentCars. All rights reserved. · <Text style={{color:'orange'}}>Privacy</Text> · <Text style={{color:'orange'}}>Terms</Text> · <Text style={{color:'orange'}}>Sitemap</Text>
          </Text>
          <br />
          <Text>Designed and Developed by Team</Text>
          <br />
          <Space style={{ marginTop: 10 }}>
            <Text>$ USD</Text>
            <Text>Cookies</Text>
            <Text>English (EN)</Text>
          </Space>
        </div>
      </Footer>
    </div>
  );
}

export default DefaultLayout;