import { useRef, useState, useEffect, useContext } from "react";
import Image from "next/image";
import { SortTodoContext } from "@/context/sortTodoContext";

const SORT_OPTIONS = [
  {
    id: "s1",
    icon: "/image/icon-sort-newest.svg",
    label: "Terbaru",
    value: "newest",
  },
  {
    id: "s2",
    icon: "/image/icon-sort-oldest.svg",
    label: "Terlama",
    value: "oldest",
  },
  {
    id: "s3",
    icon: "/image/icon-sort-asc.svg",
    label: "A-Z",
    value: "asc",
  },
  {
    id: "s4",
    icon: "/image/icon-sort-dsc.svg",
    label: "Z-A",
    value: "dsc",
  },
  {
    id: "s5",
    icon: "/image/icon-sort-unfin.svg",
    label: "Belum Selesai",
    value: "unfin",
  },
];

function SortOptions({ className }) {
  const { changeSortTodo } = useContext(SortTodoContext);
  const optionsElm = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState("newest");

  const optionsToggle = () => {
    setShowOptions(!showOptions);
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

  const onChangeSelected = (value) => {
    changeSortTodo(value);
    setSelectedOpt(value);
    optionsToggle();
  };

  return (
    <div
      ref={optionsElm}
      className={`sort-options relative ${className || ""}`}
    >
      <button
        className="w-[54px] h-[54px] flex justify-center items-center border border-gray500 rounded-full"
        onClick={optionsToggle}
      >
        <Image
          src={"/image/icon-sort.svg"}
          alt="icon-sort"
          width={24}
          height={24}
        />
      </button>
      {showOptions && (
        <ul className="absolute w-[235px] bg-white rounded-md  shadow-card mt-1">
          {SORT_OPTIONS.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-gray500 last-of-type:border-b-0 py-[14px] px-[20px] cursor-pointer"
              onClick={onChangeSelected.bind(this, item.value)}
            >
              <span className="flex font-normal">
                <Image
                  src={item.icon}
                  alt={`icon-${item.label}`}
                  width={0}
                  height={0}
                  className="w-[18px] h-[18px] mr-[15px]"
                />
                {item.label}
              </span>
              {selectedOpt === item.value && (
                <Image
                  src={"/image/icon-check-thin.svg"}
                  alt="icon-check-thin"
                  width={18}
                  height={18}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortOptions;
