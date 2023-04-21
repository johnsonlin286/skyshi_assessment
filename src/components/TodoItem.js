import Image from "next/image";

import IconButton from "./IconButton";
import Checkbox from "./Checkbox";
import PriorityIndicator from "./PriorityIndicator";

function TodoItem({ id, title, priority, isActive, onPatch }) {
  const onPatchHandler = (name) => {
    onPatch(name);
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-card py-[30px] px-7">
      <div className="flex items-center">
        <Checkbox
          id={id}
          defaultChecked={isActive < 1 ? true : false}
          className="mr-[22px]"
          onChange={onPatchHandler.bind(this, "check")}
        />
        <PriorityIndicator priority={priority} className="mr-4" />
        <strong
          className={`text-lg font-medium mr-4 ${
            isActive < 1 ? "line-through text-gray800" : ""
          }`}
        >
          {title}
        </strong>
        <IconButton onClick={onPatchHandler.bind(this, "edit")}>
          <Image
            src={"/image/icon-pencil.svg"}
            alt="icon-pencil"
            width={20}
            height={20}
          />
        </IconButton>
      </div>
      <IconButton onClick={onPatchHandler.bind(this, "delete")}>
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
