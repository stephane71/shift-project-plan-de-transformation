import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { DRAWER_WIDTH } from "../../constants";

import AppBar from "../AppBar";
import Nav from "../Nav";
import NavMenu from "../NavMenu";
import NavHeader from "../NavHeader";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
}));

function AppFrame({ children, title, menuList }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));

  function toggleDrawer() {
    if (!matches) {
      setMobileOpen(!mobileOpen);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        drawerWidth={DRAWER_WIDTH}
        title={title}
        onClickOpenDrawer={toggleDrawer}
      />
      <nav className={classes.drawer} aria-label="Articles">
        <Nav
          menu={<NavMenu items={menuList} onClickItem={toggleDrawer} />}
          header={<NavHeader onClick={toggleDrawer} />}
          open={mobileOpen}
          onClose={toggleDrawer}
        />
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

AppFrame.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  menuList: PropTypes.array
};

export default AppFrame;
