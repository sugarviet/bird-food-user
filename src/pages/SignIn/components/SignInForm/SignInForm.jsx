import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignInForm.module.css";


const SignInForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:8080";

  const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
  const handleFormSubmit = async () => {
    try {
      const response = await api.post("/login", {
        username,
        password,
      });
      navigate("/");
      console.log(response);
      // Handle successful login here, such as storing tokens in local storage or Redux state
    } catch (error) {
      // Handle error, such as displaying an error message to the user
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error.message;
        form.setFields([
          {
            name: ["user", "email"],
            errors: [errorMessage],
          },
        ]);
      }
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
              name="normal_login"
              className={style.signInForm}
              initialValues={{
                remember: true,
              }}
              onFinish={handleFormSubmit}
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
