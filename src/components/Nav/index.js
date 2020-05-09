import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

import styles from "./styles";

const useStyles = makeStyles(styles);

function Nav({ menu, open, onClose }) {
  const classes = useStyles();

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          {menu}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <div className={classes.toolbar} />
          <Divider />
          {menu}
        </Drawer>
      </Hidden>
    </>
  );
}

Nav.defaultProps = {};

Nav.propTypes = {
  menu: PropTypes.element.isRequired
};

export default Nav;
