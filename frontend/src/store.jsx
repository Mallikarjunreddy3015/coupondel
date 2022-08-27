import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer.js"


const store = configureStore({
  reducer : {
    app :appReducer
  }
});


export default store;

