import * as actionTypes from './actionTypes';
import { guidGenerator } from '../../../utils';

export const flushReviews = () => ({
  type: actionTypes.FLUSH_REVIEWS,
});

export const getReviews = (pageNo = 1, pageSize = 10) => ({
  type: actionTypes.GET_REVIEWS,
  payload: new Promise((resolve) => {
    setTimeout(() => {
      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      const startIndex = (pageNo - 1) * pageSize;
      const endIndex = pageNo * pageSize;
      const _reviews = reviews.slice(startIndex, endIndex);
      resolve({
        reviews: _reviews,
        pageNo,
        pageSize,
        total: reviews.length,
      });
    }, 1000);
  }),
});

export const addReview = review => ({
  type: actionTypes.ADD_REVIEW,
  payload: new Promise((resolve) => {
    setTimeout(() => {
      const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      const _review = {
        ...review,
        id: guidGenerator(),
      };
      localStorage.setItem('reviews', JSON.stringify([
        ...reviews,
        _review,
      ]));
      resolve({ review: _review });
    }, 1000);
  }),
});
