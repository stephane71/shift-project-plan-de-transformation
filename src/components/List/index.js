import React from "react";
import PropTypes from "prop-types";

import ListMui from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemDefault({ id, text, icon, onClick }) {
  function handleClick() {
    onClick(id);
  }

  return (
    <ListItem button onClick={handleClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={text} />
    </ListItem>
  );
}

ListItemDefault.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired
};

function List({ items, renderItem, onClickItem }) {
  return (
    <ListMui>
      {items.map((item, index) => renderItem(item, onClickItem, index))}
    </ListMui>
  );
}

List.defaultProps = {
  items: [],
  renderItem: (item, onClick, index) => {
    return (
      <ListItemDefault
        key={item.id}
        index={index}
        onClick={onClick}
        {...item}
      />
    );
  }
};

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
  onClickItem: PropTypes.func
};

export default List;
