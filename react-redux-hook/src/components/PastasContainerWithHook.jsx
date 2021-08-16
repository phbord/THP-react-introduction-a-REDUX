import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPastas, removePastas, buyRice, removeRice } from '../redux/index.jsx';

const PastasContainerWithHook = () => {
  // récupére le contenu du 'store'
  const pastas = useSelector(state => state.pastas);
  const rice = useSelector(state => state.rice);
  // effectue une action depuis le 'store' et change le 'state'
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>number of pastas kg : { pastas.pastas }</h2>
        <button type="button"
                onClick={() => dispatch(buyPastas())}>buy pastas</button>
        <button type="button"
                onClick={() => dispatch(removePastas())}>remove 1kg of pasta</button>
      </div>
      <div>
        <h2>number of rice kg : { rice.rice }</h2>
        <button type="button"
                onClick={() => dispatch(buyRice())}>buy rice</button>
        <button type="button"
                onClick={() => dispatch(removeRice())}>remove 1kg of rice</button>
      </div>
    </div>
  );
};

export default PastasContainerWithHook