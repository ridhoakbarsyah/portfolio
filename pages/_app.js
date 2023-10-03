import Head from "next/head";
import "../styles/globals.css";
import Header from "./components/Header";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="svg"></link>
        <title>Gridx - Personal Portfolio</title>
        <Component {...pageProps} />;
      </Head>
    </>
  );
}
