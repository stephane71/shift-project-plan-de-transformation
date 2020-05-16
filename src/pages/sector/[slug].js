import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import getArticleList from "../../utils/getArticleList";
import getArticle from "../../utils/getArticle";
import Article from "../../components/Article";

const useStyles = makeStyles(theme => ({
  article: {
    padding: `0 ${theme.spacing(2)}px`
  }
}));

export default function Sector({ content }) {
  const classes = useStyles();

  return (
    <div className={classes.article}>
      <Article content={content} />
    </div>
  );
}

Sector.propTypes = {
  content: PropTypes.string
};

export async function getStaticProps({ params }) {
  return {
    props: { ...getArticle(params.slug) }
  };
}

export async function getStaticPaths() {
  const articles = getArticleList();
  const paths = articles.map(article => `/sector/${article}`);

  return { paths, fallback: false };
}
