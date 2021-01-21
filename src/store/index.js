import { createStore,applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
//thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),

);
const store = createStore(reducer, enhancer);

//  const store = createStore(reducer,
//                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;