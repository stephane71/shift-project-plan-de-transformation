import React from "react";

import AppLayout from "./";

const Header = () => (
  <div style={{ backgroundColor: "grey", color: "white", height: 57 }}>Header</div>
);

const Content = () => (
  <div style={{ backgroundColor: "white", color: "grey" }}>Content</div>
);

const Footer = () => (
  <div style={{ backgroundColor: "grey", color: "white", height: 100 }}>Footer</div>
);

export default (
  <AppLayout header={<Header />} footer={<Footer />}>
    <Content />
  </AppLayout>
);
