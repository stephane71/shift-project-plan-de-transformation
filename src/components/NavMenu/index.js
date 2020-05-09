import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";

import ListBase from "../List";

function NavMenu({ items }) {
  return (
    <div>
      {items.map(item => (
        <>
          <ListBase items={item} />
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
