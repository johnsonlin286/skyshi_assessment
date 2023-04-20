import AlertContextProvider from "@/context/alertContext";
import TodoModalContextProvider from "@/context/todoModalContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AlertContextProvider>
      <TodoModalContextProvider>
        <Component {...pageProps} />
      </TodoModalContextProvider>
    </AlertContextProvider>
  );
}
