import Image from "next/image";

import PriorityIndicator from "./PriorityIndicator";

const PRIORITY_DATA = [
  { label: "Very High", value: "very-high" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
  { label: "Very Low", value: "very-low" },
];

function PriorityOptions({ onChange, className }) {
  return (
    <div className={`select-option flex flex-col ${className || ""}`}>
      <label className="text-xs font-semibold mb-[10px]">PRIORITY</label>
      <div className="relative border border-gray500 rounded-md ">
        <button className="flex justify-between items-center w-full py-[14px] px-[17px]">
          <span>Value</span>
          <Image
            src={"/image/icon-caret-down.svg"}
            alt="icon-caret-down"
            width={24}
            height={24}
          />
        </button>
        <ol className="">
          {PRIORITY_DATA.map((item, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-white border-t border-gray500 py-[14px] px-[17px]"
            >
              <span className="flex items-center">
                <PriorityIndicator priority={item.value} className="mr-5" />
                {item.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default PriorityOptions;
