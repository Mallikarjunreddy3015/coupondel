import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer.js";
import CouponReducer from "./reducers/couponReducer.js";




const reducer = combineReducers({
    app: appReducer,
    coupon: CouponReducer,

});



const store = configureStore({
  reducer,
});

export default store;
