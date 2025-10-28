import { Button, Card, Typography } from "antd";
import { motion } from "framer-motion";
import { ArrowRightOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        color: "white",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center" }}
      >
        <Title level={1} style={{ color: "white", marginBottom: "1rem" }}>
          Welcome to <span style={{ color: "#1677ff" }}>My Portfolio</span>
        </Title>
        <Paragraph style={{ color: "#d9d9d9", fontSize: "1.2rem" }}>
          A modern web application built with <strong>Next.js</strong> and{" "}
          <strong>Ant Design</strong>. Explore my work, skills, and projects.
        </Paragraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/students">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            style={{ fontWeight: 500 }}
          >
            Go to Students Page
          </Button>
        </Link>

        <Button
          type="default"
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/"
          target="_blank"
          style={{
            color: "white",
            borderColor: "white",
            fontWeight: 500,
          }}
        >
          View on GitHub
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ marginTop: "5rem", maxWidth: 600 }}
      >
        <Card
          bordered={false}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            color: "white",
          }}
        >
          <Title level={3} style={{ color: "white" }}>
            About This Project
          </Title>
          <Paragraph style={{ color: "#d9d9d9" }}>
            This project demonstrates a simple yet elegant setup using Next.js
            and Ant Design. You can explore interactive UI components, navigate
            through pages, and see how everything integrates beautifully.
          </Paragraph>
        </Card>
      </motion.div>
    </div>
  );
}
