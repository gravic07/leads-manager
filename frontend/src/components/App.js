/*jshint esversion: 6 */
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <section className="section">
            <div className="container">
              <Dashboard />
            </div>
          </section>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
