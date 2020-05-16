import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import styles from "./styles";

const useStyles = makeStyles(styles);

const NavHeader = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Link href="/">
      <div className={classes.navHeader} onClick={onClick}>
        <HomeRoundedIcon className={classes.homeIcon} />
        <Typography variant="h5">Accueil</Typography>
      </div>
    </Link>
  );
};

NavHeader.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavHeader;
