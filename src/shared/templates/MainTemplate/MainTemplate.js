import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../components/AppHeader';

const MainTemplate = ({ nextPageLink, children }) => (
  <div className="main-template">
    <AppHeader>
      {nextPageLink}
    </AppHeader>
    <main>
      {children}
    </main>
  </div>
);

MainTemplate.propTypes = {
  nextPageLink: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplate.defaultProps = {
  nextPageLink: <div />,
  children: <div />,
};

export default MainTemplate;
