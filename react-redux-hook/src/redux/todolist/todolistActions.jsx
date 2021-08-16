import { ADD_ITEM, REMOVE_ITEM } from './todolistTypes';

export const addItem = () => {
  return {
    type: ADD_ITEM
  };
};

export const removeItem = () => {
  return {
    type: REMOVE_ITEM
  };
};