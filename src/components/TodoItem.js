import Image from "next/image";

import IconButton from "./IconButton";
import Checkbox from "./Checkbox";
import PriorityIndicator from "./PriorityIndicator";

function TodoItem({ id, title, onCheck, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-card py-[30px] px-7">
      <div className="flex items-center">
        <Checkbox id={id} className="mr-[22px]" onChange={() => null} />
        <PriorityIndicator priority="very-high" className="mr-4" />
        <strong className="text-lg mr-4">TODO ITEM</strong>
        <IconButton onClick={() => null}>
          <Image
            src={"/image/icon-pencil.svg"}
            alt="icon-pencil"
            width={20}
            height={20}
          />
        </IconButton>
      </div>
      <IconButton onClick={() => null}>
        <Image
          src={"/image/icon-trash.svg"}
          alt="icon-trash"
          width={24}
          height={24}
        />
      </IconButton>
    </div>
  );
}

export default TodoItem;
