import PropTypes from "prop-types";

const TodoMenu = ({
  clear,
  hideDone,
  setHideDone,
  setTodosDone,
  setTodosActive,
  todos,
}) => (
  <>
    {todos.length > 0 && (
      <div className="w-full mt-6 bg-gray-200 rounded-lg overflow-hidden">
        <ul className="w-full flex justify-between">
          <li>
            <button
              type="button"
              className="py-4 px-4 hover:bg-gray-400 focus:outline-none"
              onClick={() => setTodosDone()}
            >
              Set Done
            </button>
            <button
              type="button"
              className="py-4 px-4 hover:bg-gray-400 focus:outline-none"
              onClick={() => setTodosActive()}
            >
              Set Active
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={clear}
              className="py-4 px-4 hover:bg-gray-400 focus:outline-none"
            >
              Clear
            </button>
            <button
              type="button"
              className="py-4 px-6 hover:bg-gray-400 focus:outline-none"
              onClick={() => setHideDone(!hideDone)}
            >
              Hide Done
            </button>
          </li>
        </ul>
      </div>
    )}
  </>
);

TodoMenu.propTypes = {
  clear: PropTypes.func.isRequired,
  hideDone: PropTypes.bool.isRequired,
  setHideDone: PropTypes.func.isRequired,
  setTodosDone: PropTypes.func.isRequired,
  setTodosActive: PropTypes.func.isRequired,
  todos: PropTypes.shape([]).isRequired,
};

export default TodoMenu;
