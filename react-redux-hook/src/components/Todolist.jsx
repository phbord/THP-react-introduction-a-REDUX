import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/index.jsx';

const Todolist = () => {
  // récupére le contenu du 'store'
  const item = useSelector(state => state.item);
  // effectue une action depuis le 'store' et change le 'state'
  const dispatch = useDispatch();

  const toggleLineThrough = (e) => {
    e.preventDefault()
    e.target.classList.toggle('line-through')
  }

  return (
    <div>
      <div>
        <h2>Todo List</h2>
        <input type="text" id="todolist-input" />
        <button type="button"
                onClick={() => dispatch(addItem())}>add todo</button>
        <button type="button"
                onClick={() => dispatch(removeItem())}>trash</button>
        <ul>
          {item.item.map((todo, i) => 
            <li key={i} onClick={toggleLineThrough}>{todo}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todolist