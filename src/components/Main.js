import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Routes from '../data/routes';
import ExperienceDetails from '../pages/ExperienceDetails';

const Main = () => (
  <main>
    <Switch>
      {Object.entries(Routes).map(([path, experience]) =>
        path === '/' ? (
          <Route exact path={path} render={() => <Home />} key={path} />
        ) : (
          <Route exact path={path} render={() => <ExperienceDetails data={[experience]} />} key={path} />
        ),
      )}
      <Redirect to="/" />
    </Switch>
  </main>
);

export default Main;
