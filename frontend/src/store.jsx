import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer.js";
import CouponReducer from "./reducers/couponReducer.js";
const store = configureStore({
  reducer: {
    app: appReducer,
    coupon: CouponReducer,
  },
});

export default store;
