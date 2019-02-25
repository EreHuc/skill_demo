import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Other from '../pages/Other';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/other" component={Other} />
      {/*<Route path="/schedule" component={Schedule} />*/}
    </Switch>
  </main>
);

export default Main;
