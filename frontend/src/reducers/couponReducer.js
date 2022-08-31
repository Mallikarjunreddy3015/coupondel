const initialState ={
    ActiveStateFilter :false,
    ActiveStateBrand :false,
}
import activeChange from './../action/appAction';
const couponReducer = (state = initialState,{type,payload}) => {
  if(type==="toggleFilter"){
   return{
        ...state,
        ActiveStateFilter: payload,
      }
  }
  if(type==="toggleBrands"){
    return{
        ...state,
        ActiveStateBrand: payload,
      }
  }
  return state;
}

export default couponReducer