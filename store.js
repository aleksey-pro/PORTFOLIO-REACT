import {createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer} from './reducers/posts'

export function makeStore (initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};