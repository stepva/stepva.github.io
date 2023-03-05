import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider>
      {router.pathname != "/" && (
        <header className="flex flex-row p-3 justify-center">
          <div className="order-1 text-center">
            <p className="text-xl hover:font-bold transition-opacity">
              <Link href="/">Home</Link>
            </p>
          </div>
        </header>
      )}
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
