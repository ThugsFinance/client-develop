import { useEffect } from "react";
import "normalize.css";

import "../styles/globals.css";

import type { AppProps } from "next/app";
// import { wrapper } from "../redux/store";
import { ToastListener } from "contexts/ToastsContext";

import Providers from "./Providers";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("page-loading").style.display = "none";
      document.body.style.overflow = "auto";
    }, 1000);
  }, []);
  return (
    <Providers>
      <ToastListener />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </Providers>
  );
}
export default MyApp;
