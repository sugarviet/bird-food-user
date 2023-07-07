import { Col, Layout, Row, Button, Input } from "antd";

const { Footer: AntdFooter } = Layout;

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  RightOutlined,
  CopyrightCircleOutlined,
} from "@ant-design/icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Layout>
      <AntdFooter>
        <Row gutter={24}>
          <Col span={6} className={styles.spacing}>
            <h1 className={styles.text}>Birdy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              et omnis fugit ea praesentium perferendis assumenda cupiditate
              laudantium aspernatur repudiandae blanditiis, quaerat quam aut
              esse est rem sit reiciendis distinctio.
            </p>
            <Row>
              <Col span={6}>
                <Button icon={<InstagramOutlined />} shape="circle" />
              </Col>
              <Col span={6}>
                <Button icon={<TwitterOutlined />} shape="circle" />
              </Col>
              <Col span={6}>
                <Button icon={<FacebookOutlined />} shape="circle" />
              </Col>
              <Col span={6}>
                <Button icon={<YoutubeOutlined />} shape="circle" />
              </Col>
            </Row>
          </Col>
          <Col span={6} className={styles.spacing}>
            <h1>Address</h1>
            <ul className={styles.footerAddress}>
              <li>
                <EnvironmentOutlined /> 123 Street, New York, USA
              </li>
              <li>
                <PhoneOutlined /> +012 345 67890
              </li>
              <li>
                <MailOutlined /> info@example.com
              </li>
            </ul>
          </Col>
          <Col span={6} className={styles.spacing}>
            <h1>Quick Links</h1>
            <ul className={styles.footerAddress}>
              <li>
                <RightOutlined /> About Us
              </li>
              <li>
                <RightOutlined /> Contact Us
              </li>
              <li>
                <RightOutlined /> Our Services
              </li>
            </ul>
          </Col>
          <Col span={6} className={styles.spacing}>
            <h1>Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              modi? Quam corrupti quod, laborum officia
            </p>
            <Input placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p className={styles.copyRight}>
              <span>
                <CopyrightCircleOutlined />
              </span>
              Copyright
            </p>
          </Col>
        </Row>
      </AntdFooter>
    </Layout>
  );
};

export default Footer;
