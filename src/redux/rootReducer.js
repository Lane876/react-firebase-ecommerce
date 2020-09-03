import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  //odakle da pocne sa skladistenjem, u ovom slucajuiz roota
  key: "root",
  storage,
  //reducer koji hocemo da sacuvamo(user je hendlovan od strane firebase-a pa nema potrebe)
  whitelist: ["product"],
};


const rootReducer = combineReducers({
  product: cartReducer,

});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
