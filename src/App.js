import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButon } from './CreateTodoButon';

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
  {
    text: "Revisar el correo",
    completed: true
  },
]

function App() {
  
  const [todos, setTodos] = React.useState(defautlTodos);
  const [searchValue, setsearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("completados==", completedTodos)
  console.log("Los usuarios buscan 'todos' de ", searchValue)  

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />

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

    </>
  );
}

export default App;
