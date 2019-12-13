import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const todos = [
  {
    name: 'todo 1',
  },
  {
    name: 'todo 2',
  },
];

const TodoItem = ({ name }) => {
  return <p>{name}</p>;
};

const TodoList = () => {
  return (
    <Fragment>
      <h3 className="title">Todo list</h3>

      {todos.map((todo, index) => {
        return <TodoItem key={index} name={todo.name} />;
      })}
    </Fragment>
  );
};

const App = () => {
  return <TodoList />;
};

ReactDOM.render(<App />, document.getElementById('root'));
