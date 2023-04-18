import Image from "next/image";
import { useState } from "react";

function Checkbox({ id, className, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkToggle = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className={`relative ${className || ""}`}>
      <label
        htmlFor={id}
        className={`flex justify-center items-center w-5 h-5 cursor-pointer border ${
          isChecked ? "bg-blue border-blue" : "border-gray300 bg-white"
        }`}
      >
        {isChecked && (
          <Image
            src={"/image/icon-check.svg"}
            alt="icon-check"
            width={14}
            height={14}
          />
        )}
      </label>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        className="absolute top-0 left-0 w-[0px] h-[0px] opacity-0"
        onChange={checkToggle}
      />
    </div>
  );
}

export default Checkbox;
