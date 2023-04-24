import { createContext, useCallback, useMemo, useState } from "react";

export const SortTodoContext = createContext({
  sortTodo: "newest" | "oldest" | "asc" | "dsc" | "unfin",
  changeSortTodo: (sortFilter) => {},
});

function SortTodoContextProvider({ children }) {
  const [sortTodo, setSortTodo] = useState("newest");

  const changeSortTodo = (sortFilter) => {
    setSortTodo(sortFilter);
  };

  const value = {
    sortTodo: sortTodo,
    changeSortTodo: changeSortTodo,
  };

  return (
    <SortTodoContext.Provider value={value}>
      {children}
    </SortTodoContext.Provider>
  );
}

export default SortTodoContextProvider;
