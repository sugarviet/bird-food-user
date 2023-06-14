import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import axios from "axios";

import style from "./SignInForm.module.css";
import { onFinish } from "../../hooks/useSignInForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignInForm = () => {
  onFinish;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      // Handle successful login here, such as storing tokens in local storage or Redux state
      console.log(response.data);
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.error(error);
    }
  };
  return (
    <Row className={style.daddyContainer}>
      <Col span={12}>
        <Link to="/">
          <img src="/background_logo.jpg" alt="Background Logo" />
        </Link>
      </Col>
      <Col span={12}>
        <div className={style.container}>
          <Card
            className={style.cardSignInForm}
            hoverable
            style={{
              width: 450,
            }}
            cover={
              <img
                alt="example"
                src="https://m.media-amazon.com/images/G/01/Lagoon/AssetLibrary/MyAccount/Login/Banner_Mobile_US_Login10.png"
              />
            }
          >
            <Form
              onSubmit={handleFormSubmit}
              name="normal_login"
              className={style.signInForm}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.formButton}
                >
                  Log in
                </Button>
              </Form.Item>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Link className={style.loginRegisterTagLink} to="/signup">
                      Register now!
                    </Link>
                    <a className={style.loginForgot} href="">
                      Forgot password
                    </a>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default SignInForm;
