import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import TodoItem from "./TodoItem";
import ModalAddTodo from "@/components/ModalAddTodo";
import { postNewTodo, checkTodo, deleteTodo } from "@/api/todo";
import { TodoModalContext } from "@/context/todoModalContext";

function TodoList({ activityId, todos, fetcUpdate }) {
  const { modalToggle } = useContext(TodoModalContext);
  const [data, setData] = useState();

  useEffect(() => {
    setData(todos);
  }, [todos]);

  const onPatchHandler = async (pickedTodo, name) => {
    // console.log(pickedTodo, name);
    switch (name) {
      case "check":
        const todo = data.find((item) => item.id === pickedTodo.id);
        const checkResult = await checkTodo(todo);
        return fetcUpdate();
      case "delete":
        const deleteResult = await deleteTodo(pickedTodo.id);
        return fetcUpdate();
      default:
        return null;
    }
  };

  const saveTodoHandler = async (todo) => {
    const result = await postNewTodo({ activityId: activityId, ...todo });
    fetcUpdate();
  };

  return (
    <>
      {data && !data.length > 0 && (
        <div className="flex justify-center items-center">
          <button data-cy="todo-empty-state" onClick={() => modalToggle(true)}>
            <Image
              src={"/image/todo-empty-state.png"}
              alt="todo-empty-state"
              width={541}
              height={413}
            />
          </button>
        </div>
      )}
      {data && (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id} className="mb-[10px]">
              <TodoItem
                id={todo.id}
                title={todo.title}
                priority={todo.priority}
                isActive={todo.is_active}
                onPatch={onPatchHandler.bind(this, { id: todo.id })}
              />
            </li>
          ))}
        </ul>
      )}
      <ModalAddTodo onSave={saveTodoHandler} />
    </>
  );
}

export default TodoList;
