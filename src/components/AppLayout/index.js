import React from "react";
import PropTypes from "prop-types";

function AppLayout({ children, footer, header }) {
  return (
    <>
      <div className="container">
        {header && <header>{header}</header>}
        <main>{children}</main>
      </div>
      {footer && <footer>{footer}</footer>}
    </>
  );
}

AppLayout.propTypes = {
  footer: PropTypes.element,
  header: PropTypes.element
};

export default AppLayout;
