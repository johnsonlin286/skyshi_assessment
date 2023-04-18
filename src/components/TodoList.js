import TodoItem from "./TodoItem";

function TodoList({ activityId }) {
  return (
    <ul>
      <li className="mb-[10px]">
        <TodoItem />
      </li>
      {/* <li className="mb-[10px]">
        <TodoItem />
      </li> */}
    </ul>
  );
}

export default TodoList;
