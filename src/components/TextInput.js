import { useEffect, useState } from "react";

function TextInput({ id, label, placeholder, defaultValue, onChangeText }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    onChangeText(e.target.value);
  };

  return (
    <div data-cy="modal-add-name-input" className="flex flex-col">
      <label htmlFor={id} className="text-xs font-semibold mb-[10px]">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={inputValue}
        className="text-input border border-gray500 rounded-md focus:outline-none py-[14px] px-[18px] mb-[26px]"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TextInput;
