import { ADD_ITEM, REMOVE_ITEM } from './todolistTypes';

const initialState = {
  item: []
};

const todolistReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      const addItemValue = () => {
        const val = document.querySelector('#todolist-input').value
        if (val !== '') {
          document.querySelector('#todolist-input').value = ''
          return state.item = [...state.item, val]
        }
        return false
      }
      return {
        ...state,
        item: addItemValue()
      };
    case REMOVE_ITEM:
      const removeItemValue = () => state.item = []
      return {
        ...state,
        item: removeItemValue()
      };
    default:
      return state;
  }
}

export default todolistReducer;