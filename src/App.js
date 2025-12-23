import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButon } from './CreateTodoButon.js';
import React from 'react';

const defautlTodos = [
  {
    text: "Hacer ejercicio",
    completed: false
  },
  {
    text: "Leer un libro",
    completed: false
  },
  {
    text: "Orar",
    completed: true
  },
  {
    text: "Mercar",
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defautlTodos.map(todoElement => (
          <TodoItem
            key={todoElement.text}
            text={todoElement.text}
            completed={todoElement.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButon />

    </React.Fragment>
  );
}

export default App;
