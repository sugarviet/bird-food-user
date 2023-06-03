import { Layout, Button, Input, Drawer, Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";

import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import styles from "./Navbar.module.css";

import useNavbar from "./hooks/useNavbar";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const {
    isDrawerVisible,
    handleShowDrawable,
    hideDrawer,
    isShowSearchBar,
    handleShowSearchBar,
  } = useNavbar();

  return (
    <Layout>
      <Header className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <Link to={"/"} className={styles.whiteText}>Logo</Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                <Link to={"/"} className={styles.whiteText}>Home</Link>
              </li>
              <li>
                <Link to={"/"} className={styles.whiteText}>About us</Link>
              </li>
              <li>
                <Link to={"/products"} className={styles.whiteText}>Products</Link>
              </li>
              <li>
                <Link to={"/"} className={styles.whiteText}>Page</Link>
              </li>
              <li>
                <Link to={"/"} className={styles.whiteText}>Contact us</Link>
              </li>
              <li>
                <Tooltip placement="bottom" title={"Search"}>
                  <Button
                    icon={<SearchOutlined />}
                    onClick={handleShowSearchBar}
                    shape="circle"
                  />
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="bottom" title={"User's account"}>
                  <Button icon={<UserOutlined />} shape="circle" />
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="bottom" title={"Cart"}>
                  <Button icon={<ShoppingCartOutlined />} shape="circle" />
                </Tooltip>
              </li>
              <li>
                <Link to={'/login'}>
                  <Button>Login</Button>
                </Link>
              </li>
            </ul>
            <Button
              icon={<MenuOutlined />}
              className={styles.navbarMenu}
              onClick={handleShowDrawable}
            />
          </div>
        </div>
      </Header>

      {/* Show when hit button search */}
      <div
        className={isShowSearchBar ? styles.navbarSearchBar : styles.invisible}
      >
        <Search allowClear placeholder="Search something ..." />

        <Tooltip placement="bottom" title={"Close search"}>
          <Button
            icon={<CloseOutlined />}
            shape="circle"
            onClick={handleShowSearchBar}
          />
        </Tooltip>
      </div>

      {/* Show menu when on mobile's screen */}
      <div>
        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={hideDrawer}
          visible={isDrawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu mode="vertical">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to={"/"}>About us</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to={"/"}>Products</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to={"/"}>Page</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to={"/"}>Contact us</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </Layout>
  );
};

export default Navbar;
