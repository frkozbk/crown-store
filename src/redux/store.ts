import {createStore,applyMiddleware} from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { AppState } from './rootReducer'
import { AppActions } from './root.types';

const middlewares = [(thunk as ThunkMiddleware<AppState,AppActions>)]


export default createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middlewares),
))