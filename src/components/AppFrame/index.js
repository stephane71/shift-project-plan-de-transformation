import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { DRAWER_WIDTH } from "../../constants";

import AppBar from "../AppBar";
import Nav from "../Nav";
import NavMenu from "../NavMenu";

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
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function AppFrame({ children, title, menuList, onClickItemMenu }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar
        drawerWidth={DRAWER_WIDTH}
        title={title}
        onClickOpenDrawer={handleDrawerToggle}
      />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Nav
          menu={<NavMenu items={menuList} onClickItem={onClickItemMenu} />}
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
  menuList: PropTypes.array,
  onClickItemMenu: PropTypes.func
};

export default AppFrame;
