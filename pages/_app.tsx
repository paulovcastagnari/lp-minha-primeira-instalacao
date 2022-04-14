import type { AppProps } from "next/app";

import "react-date-range/dist/styles.css"; // main style file
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
