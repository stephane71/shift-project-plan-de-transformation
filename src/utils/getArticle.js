const fs = require("fs");
const join = require("path").join;
const constants = require("./constants");

const { ARTICLE_PATH } = constants;

const headerRegExp = /---meta-start[\r\n]([\s\S]*)[\r\n]---meta-end/;
const headerKeyValueRegExp = /(.*): (.*)/g;

function getHeaders(markdown) {
  let header = markdown.match(headerRegExp);

  if (!header) {
    return [];
  }

  header = header[1];

  let regexMatches;
  const headers = {};

  // eslint-disable-next-line no-cond-assign
  while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
    headers[regexMatches[1]] = regexMatches[2];
  }

  return headers;
}

function getArticle(slug) {
  const fullPath = join(ARTICLE_PATH, `${slug}.md`);
  const md = fs.readFileSync(fullPath, "utf8");

  return { meta: getHeaders(md), content: md.replace(headerRegExp, ""), slug };
}

module.exports = getArticle;
