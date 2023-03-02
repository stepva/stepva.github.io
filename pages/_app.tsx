import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>all your links here</header>

      <main className="p-5 bg-red-100">
        <Component {...pageProps} />
      </main>
    </>
  );
}
