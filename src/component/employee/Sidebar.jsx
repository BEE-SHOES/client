import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faShoppingCart,
  faReceipt,
  faGift,
  faUserTie,
  faCubes,
  faTrademark,
  faTags,
  faUser,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/logo.png";
import "./style-sidebar.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SidebarComponent = ({ collapsed, toggleCollapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="sidebar"
      width={250}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        {!collapsed && (
          <div className="logo__">
            <img src={Logo} width={150} alt="Logo" />
          </div>
        )}
      </div>

      <Menu theme="light" mode="inline">
        <Menu.Item
          key="7"
          className="menu_custom"
          icon={<FontAwesomeIcon icon={faChartBar} />}
        >
          <Link to="/option7">Thống kê</Link>
        </Menu.Item>
        <Menu.Item
          key="5"
          className="menu_custom"
          icon={<FontAwesomeIcon icon={faShoppingCart} />}
        >
          <Link to="/option5">Bán hàng tại quầy</Link>
        </Menu.Item>
        <Menu.Item
          key="6"
          className="menu_custom"
          icon={<FontAwesomeIcon icon={faReceipt} />}
        >
          <Link to="/option6">Quản lý đơn hàng</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<FontAwesomeIcon icon={faCubes} />}
          className="menu_custom"
          title="Quản lý sản phẩm"
        >
          <Menu.Item key="1" icon={<FontAwesomeIcon icon={faCubes} />}>
            <Link to="/option1">Sản phẩm</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FontAwesomeIcon icon={faTrademark} />}>
            <Link to="/option2">Thương hiệu</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FontAwesomeIcon icon={faTags} />}>
            <Link to="/option3">Thể loại</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FontAwesomeIcon icon={faFlask} />}>
            <Link to="/option4">Chất liệu</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="6"
          className="menu_custom"
          icon={<FontAwesomeIcon icon={faGift} />}
        >
          <Link to="/option6">Khuyến mại</Link>
        </Menu.Item>
        <SubMenu
          key="sub10"
          icon={<FontAwesomeIcon icon={faUser} />}
          className="menu_custom"
          title="Quản lý tài khoản"
        >
          <Menu.Item key="11" icon={<FontAwesomeIcon icon={faUserTie} />}>
            <Link to="/option1">Nhân viên</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<FontAwesomeIcon icon={faUser} />}>
            <Link to="/option2">Khách hàng</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
