import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBarMui from "@material-ui/core/AppBar";

import styles from "./styles";

const useStyles = makeStyles(styles);

function AppBar({ position, title, onClickOpenDrawer, drawerWidth }) {
  const classes = useStyles({ drawerWidth });

  return (
    <AppBarMui position={position} className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onClickOpenDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBarMui>
  );
}

AppBar.defaultProps = {
  position: "fixed",
  title: "",
  drawerWidth: 0
};

AppBar.propTypes = {
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky"
  ]),
  title: PropTypes.string,
  onClickOpenDrawer: PropTypes.func,
  drawerWidth: PropTypes.number
};

export default AppBar;
