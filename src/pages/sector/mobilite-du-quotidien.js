import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactMD from "react-markdown";
import toc from "remark-toc";

import rawMd from "./mobilite-du-quotidien.md";
import styles from "./styles";

const useStyles = makeStyles(styles);

function Page() {
  const classes = useStyles();

  return (
    <ReactMD source={rawMd} plugins={[toc]} className={classes.customMd} />
  );
}

export default Page;
