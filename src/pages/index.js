import React, { useState } from "react";

import AppFrame from "../components/AppFrame";
import SectorCard from "../components/SectorCard";
import Home from "../components/Home";

import data from "../../public/data.json";

const TEST_MENU1 = data.map(item => ({
  ...item,
  id: item.title,
  text: item.title
}));

function Index() {
  const [pageContent, setPageContent] = useState(null);

  function handleClickItemMenu(item) {
    setPageContent(item);
  }

  return (
    <AppFrame
      menuList={[TEST_MENU1]}
      onClickItemMenu={handleClickItemMenu}
      title=""
    >
      {pageContent && <SectorCard data={pageContent} />}
      {!pageContent && <Home />}
    </AppFrame>
  );
}

Index.propTypes = {};

export default Index;
