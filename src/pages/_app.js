import AlertContextProvider from "@/context/alertContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <AlertContextProvider>
      <Component {...pageProps} />
    </AlertContextProvider>
  );
}
