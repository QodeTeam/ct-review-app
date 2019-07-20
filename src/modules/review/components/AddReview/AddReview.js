import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';
import { reduxForm, Form, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import GoogleLoader from '../../../../shared/components/GoogleLoader';
import StarRating from '../../../../shared/components/StarRatingReduxFormWrapper';
import { noop } from '../../../../utils';

const AddReview = ({ handleSubmit, onSubmit, loading }) => (
  <div className="add-review">
    <BlockUI
      tag="div"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
    >
      <Form onSubmit={handleSubmit(onSubmit)} className="add-review-form">
        <Grid container>
          <Grid item xs={12}>
            <Field
              name="name"
              label="Name"
              fullWidth
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="email"
              label="Email"
              fullWidth
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="phone"
              label="Phone"
              fullWidth
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              id="rating"
              name="rating"
              label="Rating"
              starRatedColor="#baaa92"
              starEmptyColor="#eeeeee"
              starHoverColor="#e1dbd0"
              starDimension="30px"
              component={StarRating}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="description"
              label="Description"
              fullWidth
              multiline
              rows={4}
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              {'Add Review'}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </BlockUI>
  </div>
);

AddReview.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

AddReview.defaultProps = {
  onSubmit: noop,
  loading: false,
};

export default reduxForm({ form: 'addReviewForm' })(AddReview);
