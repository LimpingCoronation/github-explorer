import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry/error-boundry";

import GitHubServiceContext from "./contexts/github-service-context";

import GitHubService from "./services/github-service";

import store from "./store";

const gitHubService = new GitHubService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ store }>
    <GitHubServiceContext.Provider value={ gitHubService }>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </GitHubServiceContext.Provider>
  </Provider>
);
