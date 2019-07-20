import React from 'react';
import { Link } from 'react-router-dom';

import MainTemplate from '../../shared/templates/MainTemplate/MainTemplateContainer';
import { AddReviewContainer } from '../../modules/review';

const AddReview = () => (
  <MainTemplate nextPageLink={<Link to="/">Review List</Link>}>
    <AddReviewContainer />
  </MainTemplate>
);

export default AddReview;
