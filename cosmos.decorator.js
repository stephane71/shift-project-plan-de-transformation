import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./cosmos.styles.css";
import "./src/styles.css";

export default ({ children }) => (
  <>
    <CssBaseline />
    {children}
  </>
);
