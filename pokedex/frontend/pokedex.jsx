import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import * as APIUtil from './util/api_util';
import { receivePokemon, requestPokemon, requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.dispatch = store.dispatch;
  window.fetchPokemon = APIUtil.fetchPokemon;
  window.requestPokemon = requestPokemon;
  window.requestPokemon = requestPokemon;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<Root store={store} />, rootEl);
});