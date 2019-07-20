import React from 'react';
import PropTypes from 'prop-types';

import BasicTemplate from './BasicTemplate';

const BasicTemplateContainer = ({ children }) => (
  <BasicTemplate>
    {children}
  </BasicTemplate>
);

BasicTemplateContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

BasicTemplateContainer.defaultProps = {
  children: <div />,
};

export default BasicTemplateContainer;
