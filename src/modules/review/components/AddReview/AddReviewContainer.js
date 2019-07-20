import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reset } from 'redux-form';

import AddReview from './AddReview';
import { showNotification } from '../../../../shared/components/Notifications';
import * as actions from '../../redux/actions';
import { noop, displayErrors } from '../../../../utils';
import { usePrevious } from '../../../../utils/hooks';
import {
  required, matchRegEx, email as emailRegEx, phone as phoneRegEx,
} from '../../../../utils/validators';
import validate, { validationTypes } from '../../../../utils/validate';
import RequestStates from '../../../../utils/request-states';

const AddReviewContainer = ({
  history, resetForm, addReview, loading, hasError, errorMessages,
}) => {
  const prevErrorMessages = usePrevious(errorMessages);

  useEffect(() => {
    if (hasError) {
      displayErrors(prevErrorMessages, errorMessages);
    }
  }, [hasError, errorMessages]);

  const onSubmit = (values) => {
    addReview({
      name: values.name,
      email: values.email,
      phone: values.phone,
      rating: values.rating,
      description: values.description,
    }).then(() => {
      resetForm('addReviewForm');
      showNotification('Review added successfully', 'success', 5000);
      history.push('/');
    });
  };

  const validateForm = (values) => {
    const errors = {};

    errors.name = required(values.name) && validate(validationTypes.REQUIRED, 'Name');

    errors.email = required(values.email) && validate(validationTypes.REQUIRED, 'Email');
    if (!errors.email) {
      errors.email = !matchRegEx(values.email, emailRegEx) && validate(validationTypes.INVALID, 'Email');
    }

    errors.phone = required(values.phone) && validate(validationTypes.REQUIRED, 'Phone');
    if (!errors.phone) {
      errors.phone = !matchRegEx(values.phone, phoneRegEx) && validate(validationTypes.INVALID, 'Phone');
    }

    return errors;
  };

  return (
    <AddReview
      onSubmit={onSubmit}
      initialValues={{ rating: 1.00 }}
      validate={validateForm}
      loading={loading}
    />
  );
};

AddReviewContainer.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  resetForm: PropTypes.func,
  addReview: PropTypes.func,
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessages: PropTypes.instanceOf(Array),
};

AddReviewContainer.defaultProps = {
  resetForm: noop,
  addReview: noop,
  loading: false,
  hasError: false,
  errorMessages: [],
};

const mapStateToProps = state => ({
  loading: state.reviews.addReviewRequestState === RequestStates.loading,
  hasError: state.reviews.addReviewRequestState === RequestStates.error,
  errorMessages: [
    state.reviews.addReviewError,
  ],
});

const mapDispatchToProps = dispatch => ({
  resetForm: formName => dispatch(reset(formName)),
  addReview: review => dispatch(actions.addReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReviewContainer));
