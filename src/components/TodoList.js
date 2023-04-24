import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import TodoItem from "./TodoItem";
import ModalAddTodo from "@/components/ModalAddTodo";
import { postNewTodo, checkTodo, deleteTodo, patchTodo } from "@/api/todo";
import { TodoModalContext } from "@/context/todoModalContext";
import { SortTodoContext } from "@/context/sortTodoContext";
import sortTodos from "@/utils/sort";
import ConfirmDelete from "./ConfirmDelete";

function TodoList({ activityId, todos, fetcUpdate }) {
  const { modalToggle } = useContext(TodoModalContext);
  const { sortTodo } = useContext(SortTodoContext);
  const [data, setData] = useState();
  const [pickedTodo, setPickedTodo] = useState();
  const [showDelConfirm, setShowDelConfirm] = useState(false);

  useEffect(() => {
    setData(todos);
  }, [todos]);

  useEffect(() => {
    if (!data) return;
    const sortResult = sortTodos(sortTodo, data);
    setData(sortResult);
  }, [data, setData, sortTodo]);

  const onPatchHandler = async (pickedTodoId, name) => {
    switch (name) {
      case "check":
        const todo = data.find((item) => item.id === pickedTodoId.id);
        const checkResult = await checkTodo(todo);
        return fetcUpdate();
      case "delete":
        deleteTodoHandler(pickedTodoId.id);
        return fetcUpdate();
      case "edit":
        editTodo(pickedTodoId.id);
        break;
      default:
        return null;
    }
  };

  const deleteTodoHandler = (todoId) => {
    const todo = data.find((item) => item.id === todoId);
    setPickedTodo(todo);
    setShowDelConfirm(true);
  };

  const hideDelConfirm = () => {
    setPickedTodo();
    setShowDelConfirm(false);
  };

  const deleteTodoConfirm = async () => {
    const result = await deleteTodo(pickedTodo.id);
    setShowDelConfirm(false);
    fetcUpdate();
  };

  const editTodo = (todoId) => {
    const todo = data.find((item) => item.id === todoId);
    setPickedTodo(todo);
    modalToggle(true);
  };

  const saveTodoHandler = async (name, todo) => {
    if (name === "new") {
      const result = await postNewTodo({ activityId: activityId, ...todo });
    } else if (name === "edit") {
      const result = await patchTodo(todo);
    }
    fetcUpdate();
  };

  return (
    <>
      {data && !data.length > 0 && (
        <div className="flex justify-center items-center">
          <button onClick={() => modalToggle(true)}>
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
      <ModalAddTodo
        editTodo={pickedTodo}
        clearEditTodo={() => setPickedTodo()}
        onSave={saveTodoHandler}
      />
      <ConfirmDelete
        name="modal-delete"
        isVisible={showDelConfirm}
        type="todo"
        title={pickedTodo?.title}
        onCancel={hideDelConfirm}
        onConfirm={deleteTodoConfirm}
      />
    </>
  );
}

export default TodoList;
