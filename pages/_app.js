import "@/styles/globals.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
