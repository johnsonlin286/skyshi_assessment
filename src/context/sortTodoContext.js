import { createContext, useState } from "react";

export const SortTodoContext = createContext({
  sortTodo: "newest",
  setSortTodo: () => {},
});

function SortTodoContextProvider({ children }) {
  const [sortTodo, setSortTodo] = useState("newest");

  const value = {
    sortTodo: sortTodo,
    setSortTodo: setSortTodo,
  };

  return (
    <SortTodoContext.Provider value={value}>
      {children}
    </SortTodoContext.Provider>
  );
}

export default SortTodoContextProvider;
