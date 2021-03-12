import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Home from './components/Home';
import Country from './components/Country';
import ErrorPage from './components/ErrorPage';
import Loading from './components/partials/Loading';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading fullScreen/>}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/country">
              <Route path="/country/:id" render={(props) => <Country {...props} />} />
            </Route>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
      </Suspense>
    </I18nextProvider>
  );
}
