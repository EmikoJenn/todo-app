import { useState, useReducer } from "react";
import uuid from "react-uuid";
import TodoGenerator from "../../components/TodoGenerator";
import TodoList from "../../components/TodoList";
import TodoMenu from "../../components/TodoMenu";

const initialState = { todos: [] };
const reducer = (state, action) => {
  switch (action.type) {
    // This action adds a new todo to de array
    case "add":
      return { todos: [...state.todos, action.payload] };
    // This action toggles the property Done of the selected todo
    case "toggleDone": {
      const tempArray = state.todos.slice();
      const index = tempArray.findIndex((x) => x.id === action.payload.id);
      if (index < 0) {
        return { todos: tempArray };
      }
      const tempObject = { ...tempArray[index], done: !tempArray[index].done };
      tempArray[index] = tempObject;
      return { todos: tempArray };
    }
    case "edit": {
      const tempArray = state.todos.slice();
      const index = tempArray.findIndex((x) => x.id === action.payload.id);
      if (index < 0) {
        return { todos: tempArray };
      }
      const tempObject = { ...tempArray[index], value: action.payload.value };
      tempArray[index] = tempObject;
      return { todos: tempArray };
    }
    case "delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "clear":
      return { todos: [] };
    case "done":
      return {
        todos: state.todos.map((todo) => ({ ...todo, done: true })),
      };
    case "active":
      return {
        todos: state.todos.map((todo) => ({ ...todo, done: false })),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hideDone, setHideDone] = useState(false);
  const addElement = (todoValue) => {
    dispatch({
      type: "add",
      payload: {
        id: uuid(),
        value: todoValue,
        done: false,
      },
    });
  };
  const toggleDoneProperty = (id) => {
    dispatch({
      type: "toggleDone",
      payload: {
        id,
      },
    });
  };
  const editTodo = (id, value) => {
    dispatch({
      type: "edit",
      payload: {
        id,
        value,
      },
    });
  };
  const deleteTodo = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };
  const clearTodos = () => {
    dispatch({
      type: "clear",
    });
  };
  const setTodosDone = () => {
    dispatch({
      type: "done",
    });
  };
  const setTodosActive = () => {
    dispatch({
      type: "active",
    });
  };
  return (
    <div className="w-full px-4 pt-24">
      <h1 className="text-8xl text-center">TODOs</h1>
      <div className="py-16">
        <TodoGenerator addElement={addElement} />
        <TodoList
          todos={state.todos}
          done={toggleDoneProperty}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          hideDone={hideDone}
        />
        <TodoMenu
          clear={clearTodos}
          hideDone={hideDone}
          setHideDone={setHideDone}
          setTodosDone={setTodosDone}
          setTodosActive={setTodosActive}
          todos={state.todos}
        />
      </div>
    </div>
  );
};

export default App;
