import React, { useState } from "react";
import { Layout, Input, Badge, Avatar, Menu, Dropdown } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style-header.css";

const { Header } = Layout;

const HeaderComponent = ({ collapsed, toggleCollapsed }) => {
  const handleMenuClick = (e) => {
    if (e.key === "3") {
      // Do something on logout
      console.log("Logout clicked");
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="2">Thông tin người dùng</Menu.Item>
      <Menu.Item key="3">Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <div className="sticky-header">
      <Header
        className={collapsed ? "collapsed" : ""}
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="sidebar-toggle"
            onClick={toggleCollapsed}
            style={{
              cursor: "pointer",
              width: "32px",
              marginRight: "20px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4297e3",
              borderRadius: "50%",
              color: "#fff",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Input
            placeholder="Tìm kiếm..."
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Badge>
            <BellOutlined style={{ fontSize: 20, marginRight: 16 }} />
          </Badge>
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Link
              to="/user"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar icon={<UserOutlined />} size="small" />
              <span style={{ marginLeft: 8 }}>User</span>
            </Link>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
};

export default HeaderComponent;
