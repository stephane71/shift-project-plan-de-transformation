import React from "react";
import AppFrame from ".";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const TEST_MENU1 = ["Inbox", "Starred", "Send email", "Drafts"].map(
  (text, i) => ({
    text,
    icon: i % 2 === 0 ? <InboxIcon /> : <MailIcon />
  })
);
const TEST_MENU2 = ["All mail", "Trash", "Spam"].map((text, i) => ({
  text,
  icon: i % 2 === 0 ? <InboxIcon /> : <MailIcon />
}));

export default <AppFrame menuList={[TEST_MENU1, TEST_MENU2]}>Content</AppFrame>;
