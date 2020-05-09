import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";

import ListBase from "../List";

function NavMenu({ items, onClickItem }) {
  return (
    <div>
      {items.map(item => (
        <>
          <ListBase items={item} onClickItem={onClickItem} />
          <Divider />
        </>
      ))}
    </div>
  );
}

NavMenu.propTypes = {
  items: PropTypes.array
};

export default NavMenu;
