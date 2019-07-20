import React from 'react';
import PropTypes from 'prop-types';

import MainTemplate from './MainTemplate';

const MainTemplateContainer = ({ nextPageLink, children }) => (
  <MainTemplate nextPageLink={nextPageLink}>
    {children}
  </MainTemplate>
);

MainTemplateContainer.propTypes = {
  nextPageLink: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

MainTemplateContainer.defaultProps = {
  nextPageLink: <div />,
  children: <div />,
};

export default MainTemplateContainer;
