const fs = require("fs");
const constants = require("./constants");

const { ARTICLE_PATH } = constants;

const markdownExtensionRegExp = /\.md$/;
const regexpMarkdownExtension = RegExp(markdownExtensionRegExp);

function getArticleList() {
  const articlesNotFiltered = fs.readdirSync(ARTICLE_PATH);
  return articlesNotFiltered
    .filter(fileName => regexpMarkdownExtension.test(fileName))
    .map(fileName => fileName.replace(markdownExtensionRegExp, ""));
}

module.exports = getArticleList;
