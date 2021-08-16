import { Provider } from 'react-redux';
import store from './redux/store';
import PastasContainerWithHook from 'components/PastasContainerWithHook.jsx';
import Todolist from 'components/Todolist';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PastasContainerWithHook />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
