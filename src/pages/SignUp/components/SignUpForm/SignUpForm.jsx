import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignUpForm.module.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  const API_URL = "http://localhost:8080";

  const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
  const handleFormSubmit = async () => {
    try {
      const response = await api.post("/register", {
        username,
        fullName,
        email,
        phone,
        password,
        confirmPassword,
      });
      navigate("/login");
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
            hoverable
            bordered={false}
            style={{
              width: 600,
            }}
            cover={
              <img
                alt="signup"
                src="https://miro.medium.com/freeze/fit/c/80/56/1*BJHpzKGCqf7TrVQb96656Q.gif"
              />
            }
          >
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
              onFinish={handleFormSubmit}
            >
              <Form.Item
                name={"username"}
                label="Username"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name={"email"}
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name={"fullName"}
                label="Full Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item className={style.buttonSubmit} {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
              <div className={style.loginNowTagLink}>
                <span>Alredy have account!</span>
                <Link to="/login">&nbsp;Login Now!</Link>
              </div>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  );
};
export default SignUpForm;
