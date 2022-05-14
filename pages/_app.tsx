import type { AppProps } from "next/app";

import "react-date-range/dist/styles.css"; // main style file
import "../styles/Aula1.css";
import "../styles/Aula2.css";
import "../styles/Aula3.css";
import "../styles/Aula4.css";
import "../styles/Aula5.css";
import "../styles/App.css";
import "../styles/AboutUs.css";
import "../styles/FetchApi.css";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
