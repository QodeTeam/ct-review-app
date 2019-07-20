import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ children }) => (
  <div className="app-header">
    <h2>Review App</h2>
    {children}
  </div>
);

AppHeader.propTypes = {
  children: PropTypes.element,
};

AppHeader.defaultProps = {
  children: <div />,
};

export default AppHeader;
