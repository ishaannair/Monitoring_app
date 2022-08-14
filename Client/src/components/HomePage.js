import React from "react";
import { Button, Layout, Row, Col, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import "../styles/result.css";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import Background from "./background2.jpg";
const items = [
  {
    label: "Home Page",
    key: "/",
  },
  {
    label: "Insights",
    key: "insights",
  },
  {
    label: "Profile Page",
    key: "profile",
  },
];

const HomePage = (props) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  return (
    <div>
      <Layout
        style={{ minHeight: "100vh", backgroundImage: `url(${Background})` }}
      >
        <Header>
          <div className="logo" />
          <Menu
            color="black"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            items={items}
            onClick={onClick}
          />
        </Header>
        <Content>
          <Row style={{ height: "50vh", alignItems: "center" }}>
            <Col span={24} align="middle">
              <Texty style={{ fontSize: "100px" }}>SeaForms</Texty>
            </Col>
          </Row>
          <Row align="middle" style={{}}>
            <Col span={8} align="middle">
              <Button
                className="button-test button-test2"
                shape="circle"
                style={{
                  color: "#6AA4B0",
                  background: "#ffffff",
                  width: "30vh",
                  fontSize: "5vh",
                  height: "30vh",
                  verticalAlign: "middle",
                }}
                onClick={() => {
                  navigate("profile");
                }}
              >
                User Profile
              </Button>
            </Col>
            <Col span={8} align="middle">
              <Button
                className="button-test button-test2"
                shape="circle"
                style={{
                  color: "#6AA4B0",
                  background: "#ffffff",
                  width: "30vh",
                  fontSize: "5vh",
                  height: "30vh",
                  verticalAlign: "middle",
                }}
                onClick={() => {
                  navigate("insights");
                }}
              >
                Data and Reports
              </Button>
            </Col>
            <Col span={8} align="middle">
              <Button
                className="button-test button-test2"
                shape="circle"
                style={{
                  color: "#6AA4B0",
                  background: "#ffffff",
                  width: "30vh",
                  fontSize: "5vh",
                  height: "30vh",
                  verticalAlign: "middle",
                }}
              >
                Settings
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default HomePage;
