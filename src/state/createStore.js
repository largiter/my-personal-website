import { createStore, combineReducers } from 'redux';

import mNavVisibilityR from './reducers/mNavVisibilityR';

const AllReducers = combineReducers({
  mNavVisibility: mNavVisibilityR,
});

// preloadedState will be passed in by the plugin
export default preloadedState => createStore(AllReducers, preloadedState);
