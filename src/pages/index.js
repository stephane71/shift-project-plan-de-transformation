import React, { useState } from "react";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import AppFrame from "../components/AppFrame";

const TEST_MENU1 = ["Inbox", "Starred", "Send email", "Drafts"].map(
  (text, i) => ({
    id: text,
    text,
    icon: i % 2 === 0 ? <InboxIcon /> : <MailIcon />
  })
);
const TEST_MENU2 = ["All mail", "Trash", "Spam"].map((text, i) => ({
  id: text,
  text,
  icon: i % 2 === 0 ? <InboxIcon /> : <MailIcon />
}));

function Home() {
  const [pageContent, setPageContent] = useState(null);

  function handleClickItemMenu(idItem) {
    setPageContent(idItem);
  }

  return (
    <AppFrame
      menuList={[TEST_MENU1, TEST_MENU2]}
      onClickItemMenu={handleClickItemMenu}
    >
      {pageContent}
    </AppFrame>
  );
}

Home.propTypes = {};

export default Home;
