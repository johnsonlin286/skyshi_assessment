import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import PriorityIndicator from "./PriorityIndicator";

const PRIORITY_DATA = [
  { id: "p1", label: "Very High", value: "very-high" },
  { id: "p2", label: "High", value: "high" },
  { id: "p3", label: "Medium", value: "medium" },
  { id: "p4", label: "Low", value: "low" },
  { id: "p5", label: "Very Low", value: "very-low" },
];

function PriorityOptions({ onChange, className }) {
  const optionsElm = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [pickedOption, setPickedOption] = useState({
    id: "p1",
    label: "Very High",
    value: "very-high",
  });

  const optionsToggle = () => {
    setShowOptions(!showOptions);
  };

  const changePriorityHandler = (optionId) => {
    const result = PRIORITY_DATA.find((item) => item.id === optionId);
    setPickedOption(result);
    setShowOptions(false);
    onChange(result.value);
  };

  const clickOutsideHandler = (event) => {
    const target = event.target;
    if (optionsElm.current && !optionsElm.current.contains(target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  return (
    <div
      ref={optionsElm}
      className={`select-option flex flex-col ${className || ""}`}
    >
      <label className="text-xs font-semibold mb-[10px]">PRIORITY</label>
      <div className="relative border border-gray500 rounded-md ">
        <button
          className="flex justify-between items-center w-full py-[14px] px-[17px]"
          onClick={optionsToggle}
        >
          <span>{pickedOption.label}</span>
          <Image
            src={"/image/icon-caret-down.svg"}
            alt="icon-caret-down"
            width={24}
            height={24}
          />
        </button>
        {showOptions && (
          <ol className="absolute w-full border border-gray500 rounded-md">
            {PRIORITY_DATA.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center cursor-pointer bg-white border-t border-gray500 py-[14px] px-[17px]"
                onClick={changePriorityHandler.bind(this, item.id)}
              >
                <span className="flex items-center">
                  <PriorityIndicator priority={item.value} className="mr-5" />
                  {item.label}
                </span>
                {pickedOption.id === item.id && (
                  <Image
                    src={"/image/icon-check-thin.svg"}
                    alt="icon-check-thin"
                    width={18}
                    height={18}
                  />
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default PriorityOptions;
