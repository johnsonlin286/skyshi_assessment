import { createContext, useState } from "react";

export const TodoModalContext = createContext({
  isVisible: false,
  modalToggle: (visible) => {},
});

export default function TodoModalContextProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const modalToggle = (visible) => {
    setIsVisible(visible);
  };

  const value = {
    isVisible: isVisible,
    modalToggle: modalToggle,
  };

  return (
    <TodoModalContext.Provider value={value}>
      {children}
    </TodoModalContext.Provider>
  );
}
