import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function HeadingEdit({ title, onDoneEdit }) {
  const inputElm = useRef();
  const [onEdit, setOnEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    setInputTitle(title);
  }, [title]);

  useEffect(() => {
    if (onEdit && inputElm.current) inputElm.current.focus();
  }, [inputElm, onEdit]);

  const editButtonHandler = () => {
    if (!onEdit) {
      setOnEdit(true);
    } else {
      setOnEdit(false);
      onDoneEdit(inputTitle);
    }
  };

  const onInputChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  return (
    <div className="flex items-center">
      {!onEdit ? (
        <h2
          data-cy="todo-title"
          className="text-4xl font-bold text-dark100 mr-5"
        >
          {inputTitle}
        </h2>
      ) : (
        <input
          data-cy="todo-title"
          ref={inputElm}
          value={inputTitle}
          className="text-4xl font-bold text-dark100 border-b border-b-dark100 bg-transparent focus:outline-none mr-5"
          style={{ backgroundColor: "transparent" }}
          onChange={onInputChangeHandler}
          onBlur={editButtonHandler}
        />
      )}
      <button
        data-cy="todo-title-edit-button"
        className="w-6 h-6"
        onClick={editButtonHandler}
      >
        <Image
          src={"/image/icon-pencil.svg"}
          alt="icon-pencil"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default HeadingEdit;
