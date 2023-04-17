import { createContext, useState } from "react";

export const AlertContext = createContext({
  visible: false,
  visibleToggle: () => {},
});

const AlertContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const visibleToggle = () => {
    setVisible(!visible);
  };

  const value = {
    visible: visible,
    visibleToggle: visibleToggle,
  };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertContextProvider;
