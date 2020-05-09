import React from "react";
import List from ".";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const TEST_MENU2 = ["All mail", "Trash", "Spam"].map((text, i) => ({
  id: i,
  text,
  icon: i % 2 === 0 ? <InboxIcon /> : <MailIcon />
}));

export default (
  <List items={TEST_MENU2} onClickItem={idItem => console.log(idItem)} />
);
