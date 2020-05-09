import NavMenu from ".";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";

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

export default <NavMenu items={[TEST_MENU1, TEST_MENU2]} />;
