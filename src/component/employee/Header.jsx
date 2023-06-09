import React, { useState } from "react";
import { Layout, Input, Badge, Avatar, Menu, Dropdown, Switch } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style-header.css";
import AvtDefault from "../../assets/images/328693761_727939795557043_1972102579202651860_n.jpg";

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

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    // const elements = document.querySelectorAll("*");
    // if (checked) {
    //   elements.forEach((element) => {
    //     element.classList.add("dark-mode");
    //     element.classList.remove("light-mode");
    //   });
    // } else {
    //   elements.forEach((element) => {
    //     element.classList.remove("dark-mode");
    //     element.classList.add("light-mode");
    //   });
    // }
  };

  return (
    <div className="sticky-header">
      <Header
        className={collapsed ? "collapsed" : ""}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="title_logo">BeeShoes</div>
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
          <div style={{ marginRight: 16 }}>
            <Switch
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<PoweroffOutlined />}
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <Link
              to="/user"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img className="img_avatar" src={AvtDefault} alt="User Avatar" />
              <span
                style={{ marginLeft: 8, fontWeight: 500, color: "#4f4f4f" }}
              >
                Nguyễn Công Thắng
              </span>
            </Link>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
};

export default HeaderComponent;
