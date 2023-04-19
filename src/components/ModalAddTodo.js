import Image from "next/image";
import Backdrop from "./Backdrop";
import IconButton from "./IconButton";
import Button from "./Button";
import TextInput from "./TextInput";
import PriorityOptions from "./PriorityOptions";

function ModalAddTodo() {
  return (
    <>
      <Backdrop />
      <div className="modal fixed fade flex flex-col justify-between w-[830px] h-[400px] bg-white rounded-xl shadow-card">
        <div className="flex justify-between items-center border-b border-b-gray500 py-6 px-[30px]">
          <h3 className="text-lg font-semibold">Tambah List Item</h3>
          <IconButton>
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
            onChangeText={() => {}}
          />
          <PriorityOptions className="w-[205px]" />
        </div>
        <div className="flex justify-end items-center border-t border-t-gray500 py-6 px-[30px]">
          <Button className="w-[150px]">Simpan</Button>
        </div>
      </div>
    </>
  );
}

export default ModalAddTodo;
