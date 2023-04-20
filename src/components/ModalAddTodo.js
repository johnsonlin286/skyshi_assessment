import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Backdrop from "./Backdrop";
import IconButton from "./IconButton";
import Button from "./Button";
import TextInput from "./TextInput";
import PriorityOptions from "./PriorityOptions";

function ModalAddTodo({ isVisible, onClose, onSave }) {
  const backdropElm = useRef(null);
  const modalElm = useRef(null);
  const [visible, setVisible] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [priority, setPriority] = useState("very-high");

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      hideModal();
    }
  }, [isVisible, setVisible]);

  useEffect(() => {
    if (visible && backdropElm.current) {
      backdropElm.current.addEventListener("click", hideModal);
    }
  }, [visible, backdropElm]);

  const hideModal = () => {
    if (modalElm.current && backdropElm.current) {
      modalElm.current.classList.add("out");
      backdropElm.current.classList.add("out");
      backdropElm.current.addEventListener("animationend", () => {
        setVisible(false);
        onClose();
      });
    }
  };

  const onTitleChangeHandler = (value) => {
    setInputTitle(value);
  };

  const onPriorityChangeHandler = (value) => {
    setPriority(value);
  };

  const onSaveHandler = () => {
    onSave({ title: inputTitle, priority: priority });
    setInputTitle("");
    setPriority("very-high");
    hideModal();
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      <Backdrop elmRef={backdropElm} />
      <div
        ref={modalElm}
        className="modal fixed fade flex flex-col justify-between w-[830px] h-[400px] bg-white rounded-xl shadow-card"
      >
        <div className="flex justify-between items-center border-b border-b-gray500 py-6 px-[30px]">
          <h3 className="text-lg font-semibold">Tambah List Item</h3>
          <IconButton onClick={hideModal}>
            <Image
              src={"/image/icon-close.svg"}
              alt="icon-close"
              width={24}
              height={24}
            />
          </IconButton>
        </div>
        <div className="flex-1 py-6 px-[30px]">
          <TextInput
            label="NAMA LIST ITEM"
            id="todo-title"
            placeholder="Tambahkan nama list item"
            defaultValue={inputTitle}
            onChangeText={onTitleChangeHandler.bind(this)}
          />
          <PriorityOptions
            className="w-[205px]"
            onChange={onPriorityChangeHandler.bind(this)}
          />
        </div>
        <div className="flex justify-end items-center border-t border-t-gray500 py-6 px-[30px]">
          <Button
            className="w-[150px]"
            disabled={inputTitle.length <= 0}
            onClick={onSaveHandler}
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  );
}

export default ModalAddTodo;