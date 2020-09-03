import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);