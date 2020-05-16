import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import getArticleList from "../../utils/getArticleList";
import getArticle from "../../utils/getArticle";
import Article from "../../components/Article";

const useStyles = makeStyles(theme => ({
  article: {
    padding: theme.spacing(2)
  },
  articleTopBar: {
    textAlign: "right"
  }
}));

export default function Sector({ content, slug }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.article}>
        <div className={classes.articleTopBar}>
          <Button
            size="small"
            target="_blank"
            href={`https://github.com/stephane71/shift-project-plan-de-transformation/blob/master/src/articles/${slug}.md`}
          >
            Editer cette page
          </Button>
        </div>
        <Article content={content} />
      </div>
    </Container>
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
