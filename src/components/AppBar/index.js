import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBarMui from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";

import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import styles from "./styles";

const useStyles = makeStyles(styles);

function AppBar({ position, title, onClickOpenDrawer, drawerWidth }) {
  const classes = useStyles({ drawerWidth });
  const theme = useTheme();

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
        <div style={{ flexGrow: 1 }} />
        <Tooltip title={"github"} enterDelay={300}>
          <IconButton
            component="a"
            color="inherit"
            href="https://github.com/stephane71/shift-project-plan-de-transformation"
            aria-label={"github"}
            data-ga-event-category="header"
            data-ga-event-action="github"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="toggleTheme" enterDelay={300}>
          <IconButton
            color="inherit"
            //onClick={handleTogglePaletteType}
            aria-label="toggleTheme"
            data-ga-event-category="header"
            data-ga-event-action="dark"
          >
            {theme.palette.type === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Tooltip>
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
