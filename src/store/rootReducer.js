import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as reviewReducer } from '../modules/review';

const rootReducer = combineReducers({
  form: formReducer,
  reviews: reviewReducer,
});

export default rootReducer;
