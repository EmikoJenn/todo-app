import { useState } from "react";
import PropTypes from "prop-types";

const TodoGenerator = ({ addElement }) => {
  const [todoValue, setTodoValue] = useState("");
  const addTodoItem = (event) => {
    event.preventDefault();
    if (!todoValue) return;
    addElement(todoValue);
    setTodoValue("");
  };
  return (
    <form
      className="flex border-2 border-gray-800 rounded-lg overflow-hidden"
      onSubmit={addTodoItem}
    >
      <input
        className="w-3/4 py-3 px-6 focus:outline-none bg-gray-100 focus:bg-white"
        id="todoGenerator"
        type="text"
        placeholder="New todo"
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <button
        className="w-1/4 text-white focus:outline-none bg-gray-800 active:bg-gray-600"
        type="submit"
      >
        add
      </button>
    </form>
  );
};

TodoGenerator.propTypes = { addElement: PropTypes.func.isRequired };
export default TodoGenerator;
