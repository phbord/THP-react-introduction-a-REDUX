import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer
})

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const BUY_PASTAS = 'BUY_PASTAS';
const EAT_PASTAS = 'EAT_PASTAS';

const initialState = {
  pastas: 4,
  rice: 8
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + action.weight
      }
    case EAT_PASTAS:
      return {
        ...state,
        pastas: state.pastas - action.weight
      }
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + action.weight
      }
    case EAT_RICE:
      return {
        ...state,
        rice: state.rice - action.weight
      }
    default:
      return state
  }
}

store.dispatch(eatPastas(3));
store.dispatch(buyPastas(2));
store.dispatch(buyRice(2));
store.dispatch(buyPastas(2));
store.dispatch(buyRice(1));
store.dispatch(eatRice(2));
store.dispatch(eatPastas(1));