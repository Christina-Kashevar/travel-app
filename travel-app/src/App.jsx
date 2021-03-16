import React, { Suspense, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Home from './components/Home';
import Country from './components/Country';
import ErrorPage from './components/ErrorPage';
import Loading from './components/partials/Loading';
import { UserContext } from './contexts/UserContext';

export default function App() {
  const [context, setContext] = useState(null);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading fullScreen />}>
        <UserContext.Provider value={[context, setContext]}>
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/country">
                  <Route path="/country/:code" render={(props) => <Country {...props} />} />
                </Route>
                <Route path="*">
                  <ErrorPage />
                </Route>
              </Switch>
            </div>
          </Router>
        </UserContext.Provider>
      </Suspense>
    </I18nextProvider>
  );
}
