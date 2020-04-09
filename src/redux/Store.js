import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import HomeReducer from './Reducer/HomeReducer'

export default createStore(
    combineReducers({
        HomeReducer
    }),
    {},
    applyMiddleware(thunk)

);
