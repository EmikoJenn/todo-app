import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTimes,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, index, done, editTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.value);
  const setTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setNewTodo(todo.value);
      editTodo(todo.id, todo.value);
    } else {
      editTodo(todo.id, newTodo);
    }
    setEditing(false);
  };

  return (
    <li
      className={
        index % 2 === 0
          ? "w-full p-4 flex bg-gray-100"
          : "w-full p-4 flex bg-gray-300"
      }
    >
      <input
        type="checkbox"
        name={`name-${todo.id}`}
        id={`item-${todo.id}`}
        className="w-8 h-6 mr-4"
        checked={todo.done}
        onChange={() => done(todo.id)}
      />
      {editing ? (
        <form
          action=""
          className="w-full flex justify-between"
          onSubmit={setTodo}
        >
          <div className="w-5/6 flex relative">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full px-2 bg-transparent border-b-2 border-gray-600 pb-2 -mb-2 capitalize focus:outline-none focus:border-blue-600"
            />
            <FontAwesomeIcon
              icon={faCheckCircle}
              onClick={setTodo}
              className={
                !newTodo.trim()
                  ? "hidden"
                  : "absolute right-0 text-2xl text-green-600 hover:text-green-800 rounded-full"
              }
            />
          </div>
          <div className="w-1/6 flex justify-end">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-xl text-blue-500 hover:text-blue-700"
              onClick={() => setEditing(false)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl ml-2 hover:text-gray-600"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </form>
      ) : (
        <div className="w-full flex justify-between">
          <label
            htmlFor={`item-${todo.id}`}
            className={!todo.done ? "capitalize" : "capitalize line-through"}
          >
            {todo.value}
          </label>
          <div>
            <FontAwesomeIcon
              icon={faEdit}
              className="text-xl hover:text-gray-600"
              onClick={() => setEditing(true)}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl ml-2 hover:text-gray-600"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    value: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;
