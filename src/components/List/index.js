import React from "react";
import PropTypes from "prop-types";

import ListMui from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemDefault({ text, icon }) {
  return (
    <ListItem button>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={text} />
    </ListItem>
  );
}

function List({ items, renderItem }) {
  return (
    <ListMui>{items.map((item, index) => renderItem(item, index))}</ListMui>
  );
}

List.defaultProps = {
  items: [],
  renderItem: (item, index) => (
    <ListItemDefault
      key={index}
      icon={item.icon}
      text={item.text}
      index={index}
    />
  )
};

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func
};

export default List;
