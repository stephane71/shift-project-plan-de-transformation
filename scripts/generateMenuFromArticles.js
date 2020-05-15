const fs = require("fs");

const articlesPath = "./src/articles";
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

function generateMenuFromArticles() {
  const articlesNotFiltered = fs.readdirSync(articlesPath);
  const articles = articlesNotFiltered.filter(
    fileName => fileName.split(".").pop() === "md"
  );

  return articles.map(fileName => {
    const md = fs.readFileSync(`${articlesPath}/${fileName}`, "utf8");
    return { ...getHeaders(md), fileName };
  });
}

const menu = generateMenuFromArticles();
fs.writeFileSync("./src/articles/menu.json", JSON.stringify(menu));
