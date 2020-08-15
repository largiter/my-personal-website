import { createStore, combineReducers } from 'redux';

import mNavVisibilityR from './reducers/mNavVisibilityR';
import cursorR from './reducers/cursorR';

const AllReducers = combineReducers({
  mNavVisibility: mNavVisibilityR,
  cursorR,
});

// preloadedState will be passed in by the plugin
export default preloadedState => createStore(AllReducers, preloadedState);
