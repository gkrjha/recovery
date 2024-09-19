import { createStore } from "redux";
import { rootReducer } from "./Reducer/Index";

// Setting up Redux DevTools extension if available
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
