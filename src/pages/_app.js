import AlertContextProvider from "@/context/alertContext";
import TodoModalContextProvider from "@/context/todoModalContext";
import SortTodoContextProvider from "@/context/sortTodoContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AlertContextProvider>
      <TodoModalContextProvider>
        <SortTodoContextProvider>
          <Component {...pageProps} />
        </SortTodoContextProvider>
      </TodoModalContextProvider>
    </AlertContextProvider>
  );
}
