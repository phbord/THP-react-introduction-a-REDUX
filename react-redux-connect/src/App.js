import { Provider } from 'react-redux';
import store from './redux/store';
import PastasContainer from 'components/PastasContainer.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PastasContainer />
      </div>
    </Provider>
  );
}

export default App;
