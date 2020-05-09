import React from "react";

import { DRAWER_WIDTH } from "../../constants";

import AppBar from ".";

export default {
  "Drawer width 0px": <AppBar title={"Title app bar"} />,
  "Drawer width 240px": (
    <AppBar title={"Title app bar"} drawerWidth={DRAWER_WIDTH} />
  )
};
