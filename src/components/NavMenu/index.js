import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ListBase from "../List";

function ListItemMenu({ item, onClickItem }) {
  const { icon, text, keyword } = item;

  return (
    <NextLink href="/sector/[slug]" as={`/sector/${keyword}`}>
      <ListItem button onClick={onClickItem}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItem>
    </NextLink>
  );
}

ListItemMenu.propTypes = {
  item: PropTypes.object.isRequired
};

function NavMenu({ items, onClickItem }) {
  function renderItem(item, onClickItem) {
    return <ListItemMenu key={item.id} item={item} onClickItem={onClickItem} />;
  }

  return (
    <div>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ListBase
            items={item}
            onClickItem={onClickItem}
            renderItem={renderItem}
          />
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}

NavMenu.propTypes = {
  items: PropTypes.array
};

export default NavMenu;
