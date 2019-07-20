import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarRatingReduxFormWrapper = ({
  input, meta, id, label, ...rest
}) => (
  <div className="star-rating-wrapper">
    <label htmlFor={id}>{label}</label>
    <StarRatings
      {...rest}
      {...input}
      id={id}
      rating={Number(input.value)}
      changeRating={input.onChange}
    />
    {
      meta.touched && meta.error
      && <span className="error">{meta.error}</span>
    }
  </div>
);

StarRatingReduxFormWrapper.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string,
  label: PropTypes.string,
};

StarRatingReduxFormWrapper.defaultProps = {
  input: {},
  meta: {},
  id: '',
  label: '',
};

export default StarRatingReduxFormWrapper;
