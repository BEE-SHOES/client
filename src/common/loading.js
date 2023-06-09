import React from "react";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const LoadingIndicator = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 10000,
    }}
  >
    <Spin
      indicator={<Loading3QuartersOutlined style={{ fontSize: 48 }} spin />}
    />
  </div>
);

export default LoadingIndicator;
