import { BUY_PASTAS, REMOVE_PASTAS } from './pastasTypes';

export const buyPastas = () => {
  return {
    type: BUY_PASTAS
  };
};

export const removePastas = () => {
  return {
    type: REMOVE_PASTAS
  };
};