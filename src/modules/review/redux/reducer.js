import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  reviews: [],
  reviewsPageNo: 1,
  reviewsPageSize: 10,
  totalReviews: 0,
  getReviewsRequestState: RequestStates.init,
  getReviewsError: null,
  addReviewRequestState: RequestStates.init,
  addReviewError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FLUSH_REVIEWS:
      return {
        ...state,
        reviews: [],
        reviewsPageNo: 1,
        reviewsPageSize: 10,
        totalReviews: 0,
      };
    case actionTypes.GET_REVIEWS_LOADING:
      return {
        ...state,
        getReviewsRequestState: RequestStates.loading,
        getReviewsError: null,
      };
    case actionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload.reviews,
        reviewsPageNo: action.payload.pageNo,
        reviewsPageSize: action.payload.pageSize,
        totalReviews: action.payload.total,
        getReviewsRequestState: RequestStates.success,
        getReviewsError: null,
      };
    case actionTypes.GET_REVIEWS_ERROR:
      return {
        ...state,
        getReviewsRequestState: RequestStates.error,
        getReviewsError: action.payload.error,
      };
    case actionTypes.ADD_REVIEW_LOADING:
      return {
        ...state,
        addReviewRequestState: RequestStates.loading,
        addReviewError: null,
      };
    case actionTypes.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          action.payload.review,
        ],
        addReviewRequestState: RequestStates.success,
        addReviewError: null,
      };
    case actionTypes.ADD_REVIEW_ERROR:
      return {
        ...state,
        addReviewRequestState: RequestStates.error,
        addReviewError: action.payload.error,
      };
    default:
      return state;
  }
};
