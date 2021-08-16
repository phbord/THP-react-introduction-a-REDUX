import { createStore } from "redux";
import pastasReducer from "redux/pastas/pastasReducer";

let store = createStore(
  pastasReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;