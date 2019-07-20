import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReviewList from './ReviewList';
import * as actions from '../../redux/actions';
import { noop, displayErrors } from '../../../../utils';
import { usePrevious } from '../../../../utils/hooks';
import RequestStates from '../../../../utils/request-states';

const ReviewListContainer = ({
  getReviews, flushReviews, reviews, reviewsPageNo, reviewsPageSize, totalReviews,
  loading, hasError, errorMessages,
}) => {
  useEffect(() => {
    getReviews();
  }, []);

  const prevErrorMessages = usePrevious(errorMessages);
  useEffect(() => {
    if (hasError) {
      displayErrors(prevErrorMessages, errorMessages);
    }
  }, [hasError, errorMessages]);


  const onChangePageNo = (event, nextPageNo) => {
    flushReviews();
    // use +1 here because material-ui pagination is 0 based and our setup has pagination 1 based.
    getReviews(nextPageNo + 1, reviewsPageSize);
  };

  const onChangePageSize = (event) => {
    flushReviews();
    getReviews(1, event.target.value);
  };

  return (
    <ReviewList
      loading={loading}
      reviews={reviews}
      reviewsPageNo={reviewsPageNo}
      reviewsPageSize={reviewsPageSize}
      totalReviews={totalReviews}
      onChangePageNo={onChangePageNo}
      onChangePageSize={onChangePageSize}
    />
  );
};

ReviewListContainer.propTypes = {
  getReviews: PropTypes.func,
  flushReviews: PropTypes.func,
  reviews: PropTypes.instanceOf(Array),
  reviewsPageNo: PropTypes.number,
  reviewsPageSize: PropTypes.number,
  totalReviews: PropTypes.number,
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessages: PropTypes.instanceOf(Array),
};

ReviewListContainer.defaultProps = {
  getReviews: noop,
  flushReviews: noop,
  reviews: [],
  reviewsPageNo: 1,
  reviewsPageSize: 10,
  totalReviews: 0,
  loading: false,
  hasError: false,
  errorMessages: [],
};

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  reviewsPageNo: state.reviews.reviewsPageNo,
  reviewsPageSize: state.reviews.reviewsPageSize,
  totalReviews: state.reviews.totalReviews,
  loading: state.reviews.getReviewsRequestState === RequestStates.loading,
  hasError: state.reviews.getReviewsRequestState === RequestStates.error,
  errorMessages: [
    state.reviews.getReviewsError,
  ],
});

const mapDispatchToProps = dispatch => ({
  getReviews: (pageNo, pageSize) => dispatch(actions.getReviews(pageNo, pageSize)),
  flushReviews: () => dispatch(actions.flushReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);
