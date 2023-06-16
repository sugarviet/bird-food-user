import { Layout, Button, Input, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from '../../assets/logo1.png';

import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import styles from "./Navbar.module.css";

import useNavbar from "./hooks/useNavbar";
import Drawer from "./components/Drawer";

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

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 75) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  return (
    <Layout>
      <Header className={isScroll ? styles.navbarOnScroll : styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <Link to={"/"} className={styles.whiteText}><img className={styles.logo} src={logo}/></Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                <Link to={"/"} className={styles.whiteText}>Home</Link>
              </li>
              <li>
                <Link to={"/aboutus"} className={styles.whiteText}>About us</Link>
              </li>
              <li>
                <Link to={"/products"} className={styles.whiteText}>Products</Link>
              </li>
              <li>
                <Link to={"/blogs"} className={styles.whiteText}>Blogs</Link>
              </li>
              <li>
                <Link to={"/contactus"} className={styles.whiteText}>Contact us</Link>
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
                <Link to={'/profile'}>
                  <Tooltip placement="bottom" title={"User's account"}>
                    <Button icon={<UserOutlined />} shape="circle" />
                  </Tooltip>
                </Link>
              </li>
              <li>
                <Link to={'/cart'}>
                  <Tooltip placement="bottom" title={"Cart"}>
                    <Button icon={<ShoppingCartOutlined />} shape="circle" />
                  </Tooltip>
                </Link>
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
        <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer}/>
    </Layout>
  );
};

export default Navbar;
