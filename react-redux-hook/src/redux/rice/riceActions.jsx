import { BUY_RICE, REMOVE_RICE } from './riceTypes';

export const buyRice = () => {
  return {
    type: BUY_RICE
  };
};

export const removeRice = () => {
  return {
    type: REMOVE_RICE
  };
};