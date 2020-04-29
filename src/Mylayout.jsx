import React, { Component } from "react";
import { Layout, Menu } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

export default class Mylayout extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  Degisti = (b) => {
    console.log(b);

    if (b === true) this.setState({ collapsed: true });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          breakpoint="lg"
          collapsedWidth="0"
          collapsed={this.state.collapsed}
          onBreakpoint={(broken) => {
            if(broken===true) 
              this.setState({collapsed:true})
            else
               this.setState({collapsed:false})
          }}
        >
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
        <Layout
          style={{ height: "100vh", overflowX: "hidden" }}
          className="site-layout"
        >
          <Header
            style={{ position: "fixed", width: "100%", background: "white" }}
            className="site-layout-background"
          >
            {this.state.collapsed ? (
              <MenuUnfoldOutlined onClick={this.toggle} />
            ) : (
              <MenuFoldOutlined onClick={this.toggle} />
            )}
          </Header>
          <Content style={{ marginTop: 64 }} className="site-layout-background">
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
