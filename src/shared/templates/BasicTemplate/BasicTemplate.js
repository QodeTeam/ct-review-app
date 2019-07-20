import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const BasicTemplate = ({ children }) => (
  <div className="page">
    <Paper className="widget">
      <div className="children">
        {children}
      </div>
    </Paper>
  </div>
);

BasicTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

BasicTemplate.defaultProps = {
  children: <div />,
};

export default BasicTemplate;
