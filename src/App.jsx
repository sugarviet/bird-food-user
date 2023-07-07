import { Fragment } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import { UserProvider } from "./store/User";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3cb815",
        },
      }}
    >
      <UserProvider>
        <Fragment>
          <Layout />
        </Fragment>
      </UserProvider>
    </ConfigProvider>
  );
}

export default App;
