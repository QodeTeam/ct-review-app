import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from '../../shared/templates/MainTemplate/MainTemplateContainer';
import { ReviewListContainer } from '../../modules/review';

const ReviewList = () => (
  <MainTemplate nextPageLink={<Link to="/add-review"> Add Review </Link>}>
    <ReviewListContainer />
  </MainTemplate>
);

export default ReviewList;
