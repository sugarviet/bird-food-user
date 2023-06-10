import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";
import { onFinish } from "../../hooks/useSignUpForm";
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
  const [form] = Form.useForm();
  onFinish;
  return (
    <Row className={style.daddyContainer}>
      <Col span={12}>
        <img src="/background_logo.jpg" alt="Background Logo" />
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
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
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
                <Input.Password />
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
                <Input.Password />
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
