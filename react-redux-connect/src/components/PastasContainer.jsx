import React from 'react';
import { connect } from 'react-redux';
import { buyPastas } from '../redux/index.jsx';

const PastasContainer = (props) => {
  return (
    <div>
      <h2>number of pastas kg : { props.pastas }</h2>
      <button type="button"
              onClick={props.buyPastas}>buy pastas</button>
    </div>
  );
};


// retourne un objet contenant le nombre de pâtes, en le récupérant depuis le store
// state = store redux
const mapStateToProps = (state) => {
  return {
    pastas: state.pastas
  };
};

// va permettre à notre composant de récupérer les actions disponibles afin de les dispatcher (modifier)
// et envoyer des informations à notre store
const mapDispatchToProps = (dispatch) => {
  return {
    buyPastas: () => (dispatch(buyPastas()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PastasContainer)