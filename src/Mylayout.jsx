import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default class Mylayout extends Component {
  render() {
    return (
      <Layout>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
            yty
            tyt
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

trtr
<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            

          </Content>
        </Layout>
      </Layout>
    );
  }
}
