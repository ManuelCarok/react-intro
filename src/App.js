import React from 'react';
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Llorar', completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
