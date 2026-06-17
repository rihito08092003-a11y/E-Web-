import { createStore } from "redux";
import { persistStore } from "redux-persist";

const initialState = {};

const rootReducer = (state = initialState) => state;

const store = createStore(rootReducer);

export const persistor = persistStore(store);
export default store;
