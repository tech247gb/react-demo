import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from './../Reducers/Index';
const initialState = {}

const middleware = [thunk];

// Employee store

export const employeeStore = configureStore({ reducer: rootReducer } ,initialState,composeWithDevTools(applyMiddleware(...middleware)))
