import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchStudents = async () => {
  try {
    const res = await axios.get("/api/students");
    console.log("📦 Raw data from API:", res.data);

    if (Array.isArray(res.data)) {
      setStudents(res.data);
    } else {
      console.error("Unexpected data format:", res.data);
      setStudents([]);
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    setStudents([]);
  }
};

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (values) => {
    try {
     await axios.post("/api/students", values);

      message.success("Student added successfully!");
      setIsModalOpen(false);
      form.resetFields();
      fetchStudents();
    } catch (err) {
      message.error("Failed to add student");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "NIS", dataIndex: "nis" },
    { title: "Class", dataIndex: "class" },
    { title: "Major", dataIndex: "major" },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Student
      </Button>

      <Table
        columns={columns}
        dataSource={students}
        rowKey="nis"
        style={{ marginTop: 16 }}
      />

      <Modal
        title="Add Student"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="NIS"
            name="nis"
            rules={[{ required: true, message: "Please input NIS" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Class"
            name="class"
            rules={[{ required: true, message: "Please input class" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Major"
            name="major"
            rules={[{ required: true, message: "Please input major" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
