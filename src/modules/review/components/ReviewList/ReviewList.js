import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';
import StarRatings from 'react-star-ratings';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import GoogleLoader from '../../../../shared/components/GoogleLoader';
import { noop, Ellipsis } from '../../../../utils';

const ReviewList = ({
  loading, reviews, reviewsPageNo, reviewsPageSize, totalReviews, onChangePageNo, onChangePageSize,
}) => (
  <div className="review-list">
    <BlockUI
      tag="div"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
      className="full-height"
      keepInView
    >
      <Table className="review-list-table">
        <TableHead className="table-header">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {reviews.map(review => (
            <TableRow key={review.id}>
              <TableCell>
                <div className="name">
                  {review.name || ''}
                </div>
              </TableCell>
              <TableCell>{review.email || ''}</TableCell>
              <TableCell>{review.phone || ''}</TableCell>
              <TableCell>
                <StarRatings
                  rating={review.rating}
                  starRatedColor="#baaa92"
                  starEmptyColor="#eeeeee"
                  starHoverColor="#e1dbd0"
                  starDimension="15px"
                  starSpacing="2px"
                />
              </TableCell>
              <TableCell>
                <div className="description">
                  {Ellipsis(review.description, 200)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="table-footer">
          <TableRow>
            <TablePagination
              classes={{
                select: 'page-number-select',
                selectIcon: 'page-number-select-caret',
              }}
              count={totalReviews}
              page={reviewsPageNo - 1}
              rowsPerPageOptions={[5, 10, 25]}
              rowsPerPage={reviewsPageSize}
              onChangePage={onChangePageNo}
              onChangeRowsPerPage={onChangePageSize}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </BlockUI>
  </div>
);

ReviewList.propTypes = {
  loading: PropTypes.bool,
  reviews: PropTypes.instanceOf(Array),
  reviewsPageNo: PropTypes.number,
  reviewsPageSize: PropTypes.number,
  totalReviews: PropTypes.number,
  onChangePageNo: PropTypes.func,
  onChangePageSize: PropTypes.func,
};

ReviewList.defaultProps = {
  loading: false,
  reviews: [],
  reviewsPageNo: 1,
  reviewsPageSize: 10,
  totalReviews: 0,
  onChangePageNo: noop,
  onChangePageSize: noop,
};

export default ReviewList;
