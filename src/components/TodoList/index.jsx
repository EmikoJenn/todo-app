import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, done, editTodo, deleteTodo, hideDone }) => (
  <ul className="w- mt-8 rounded-lg overflow-hidden">
    {hideDone
      ? todos.map((todo, index) => (
          <>
            {!todo.done && (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                done={done}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            )}
          </>
        ))
      : todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            done={done}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired,
  done: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  hideDone: PropTypes.bool.isRequired,
};
export default TodoList;
