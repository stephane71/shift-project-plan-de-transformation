import React from "react";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import AppLayout from "../components/AppLayout";
import AppFrame from "../components/AppFrame";
import makeStore from "../makeStore";
import theme from "../theme";
import "../styles.css";

import appStaticProps from "../appStaticProps.json";

const INITIAL_STATE = {};
const store = makeStore(INITIAL_STATE);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const { menu } = appStaticProps;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppLayout>
            <CssBaseline />
            <AppFrame menuList={[menu]} title={""}>
              <Component {...pageProps} />
            </AppFrame>
          </AppLayout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
