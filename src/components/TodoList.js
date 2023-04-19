import Image from "next/image";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  if (todos && !todos.length > 0) {
    return (
      <div className="flex justify-center items-center">
        <button data-cy="todo-empty-state">
          <Image
            src={"/image/todo-empty-state.png"}
            alt="todo-empty-state"
            width={541}
            height={413}
          />
        </button>
      </div>
    );
  }
  return (
    <ul>
      {todos?.map((item) => (
        <li key={item.id} className="mb-[10px]">
          <TodoItem />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
