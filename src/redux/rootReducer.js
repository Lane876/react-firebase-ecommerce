import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer'


const rootReducer = combineReducers({
  product: cartReducer,
  amount: cartReducer,

});

export default rootReducer;
