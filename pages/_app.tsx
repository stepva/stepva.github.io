import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
