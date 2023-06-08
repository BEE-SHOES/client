import React, { useState, useEffect } from "react";
import { Form, Input, Button, Table, Space } from "antd";
import "./style.css";
import axios from "axios";
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
  faEdit,
  faTrashAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sales = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const onFinish = (values) => {
    setData([...data, values]);
    form.resetFields();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://63ddb6c1f1af41051b085a9b.mockapi.io/member"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDetail = (record) => {
    // Xử lý logic khi nhấp vào nút Chi tiết
    console.log("Chi tiết", record);
  };

  const handleUpdate = (record) => {
    // Xử lý logic khi nhấp vào nút Cập nhật
    console.log("Cập nhật", record);
  };

  const handleRemove = (record) => {
    // Xử lý logic khi nhấp vào nút Xóa
    console.log("Xóa", record);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã SV",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Họ và Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Hành động",
      key: "action",
      render: (record) => (
        <Space>
          <Button
            style={{ padding: 5 }}
            type="link"
            onClick={() => handleDetail(record)}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </Button>
          <Button
            style={{ padding: 5 }}
            type="link"
            onClick={() => handleUpdate(record)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button
            style={{ padding: 5 }}
            type="link"
            onClick={() => handleRemove(record)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container_sales">
      <div className="content">
        <h1>Form và Bảng</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="name" label="Họ và Tên">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Số điện thoại">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>

        <Table
          dataSource={data}
          columns={columns}
          rowKey={(record, index) => index.toString()}
        />
      </div>
    </div>
  );
};

export default Sales;
