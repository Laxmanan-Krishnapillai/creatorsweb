import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Mouse } from "../components/mouse";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
