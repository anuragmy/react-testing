import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const store = createStore(RootReducer, composeWithDevTools((applyMiddleware(...middlewares))))
// export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares)(createStore))

// export const store = createStoreWithMiddleware(RootReducer)