const fs = require("fs");
const getArticleList = require("../src/utils/getArticleList");
const getArticle = require("../src/utils/getArticle");

function appGetStaticProps() {
  const articles = getArticleList();
  const menu = articles
    .map(article => {
      return getArticle(article);
    })
    .map(({ meta, slug }) => ({
      id: slug,
      text: meta.title,
      keyword: slug
    }));

  return {
    props: { menu }
  };
}

const appProps = appGetStaticProps();
fs.writeFileSync("./src/appStaticProps.json", JSON.stringify(appProps.props));
