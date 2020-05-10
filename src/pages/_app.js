import React from "react";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";

import AppLayout from "../components/AppLayout";
import AppFrame from "../components/AppFrame";
import makeStore from "../makeStore";
import "../styles.css";

import data from "../../public/data.json";

const TEST_MENU1 = data.map(item => ({
  ...item,
  id: item.title,
  text: item.title
}));

const INITIAL_STATE = {};
const store = makeStore(INITIAL_STATE);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <AppLayout>
          <CssBaseline />
          <AppFrame menuList={[TEST_MENU1]} title="">
            <Component {...pageProps} />
          </AppFrame>
        </AppLayout>
      </Provider>
    );
  }
}

export default MyApp;
