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
      <Layout >
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
        <Layout style={{ height:'100vh', overflowX:"hidden" }} className="site-layout">
          <Header style={{position:"fixed", width:"100%"}}
            className="site-layout-background"
          
          ></Header>
          <Content style={{ marginTop:64 }}
            className="site-layout-background"
    
          >
            ilk
            <br />
            <br />
            <br />
            
            <br />
            <br />
            Content yty tyt
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Content yty tyt
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Content yty tyt
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Content yty tyt
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Content yty tyt
            <br />
            <br />
            <br />
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />
            fffffffff
          </Content>
        </Layout>
      </Layout>
    );
  }
}
