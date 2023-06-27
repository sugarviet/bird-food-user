import { Layout, Button, Input, Tooltip, Dropdown, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo1.png";

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
import { useToken } from "../../services/Login/services";

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCartItems(JSON.parse(localCart));
    }
  }, []);




  const decodedToken = useToken();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (decodedToken) {
      setLoggedIn(true);
    }
  }, [decodedToken]);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  const items = [
    {
      label: <Link to="/profile">My Profile</Link>,
      key: "0",
    },

    {
      type: "divider",
    },
    {
      label: <div onClick={logout}>Log Out</div>,
      key: "2",
    },
  ];

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
            <Link to={"/"} className={styles.whiteText}>
              <img className={styles.logo} src={logo} />
            </Link>
          </div>
          <div className={styles.navbarAction}>
            <ul className={styles.navbarActionList}>
              <li>
                <Link to={"/"} className={styles.whiteText}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/aboutus"} className={styles.whiteText}>
                  About us
                </Link>
              </li>
              <li>
                <Link to={"/products"} className={styles.whiteText}>
                  Products
                </Link>
              </li>
              <li>
                <Link to={"/blogs"} className={styles.whiteText}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to={"/contactus"} className={styles.whiteText}>
                  Contact us
                </Link>
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
                <Link to={"/cart"}>
                  <Tooltip placement="bottom" title={"Cart"}>
                    <Badge count={cartItems.length}>
                      <Button icon={<ShoppingCartOutlined />} shape="circle" />
                    </Badge>
                  </Tooltip>
                </Link>
              </li>
              <li>
                {loggedIn ? (
                  <Dropdown
                    placement="bottom"
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Button icon={<UserOutlined />} shape="circle" />
                    </a>
                  </Dropdown>
                ) : (
                  <Link to={"/login"}>
                    <Button>Login</Button>
                  </Link>
                )}
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
      <Drawer isDrawerVisible={isDrawerVisible} hideDrawer={hideDrawer} />
    </Layout>
  );
};

export default Navbar;
