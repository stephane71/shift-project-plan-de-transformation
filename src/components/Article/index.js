import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import ReactMD from "react-markdown";
import toc from "remark-toc";
import slug from "remark-slug";

import styles from "./styles";

const useStyles = makeStyles(styles);

function Article({ content }) {
  const classes = useStyles();

  return (
    <ReactMD
      source={content}
      plugins={[slug, toc]}
      className={classes.customMd}
    />
  );
}

Article.propTypes = {
  content: PropTypes.string
};

export default Article;
