import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ReviewList from './scenes/review/ReviewList';
import AddReview from './scenes/review/AddReview';

import NotFound from './scenes/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ReviewList} />
      <Route exact path="/add-review" component={AddReview} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
