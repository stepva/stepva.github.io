import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const router = useRouter();

  return (
    <main className={theme}>
      <div className="dark:text-white dark:bg-black">
        {router.pathname === "/" && (
          <header className="flex flex-row p-3 justify-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme == "dark" ? (
                <SunIcon className="w-6 hover:animate-spin" />
              ) : (
                <MoonIcon className="w-6 hover:animate-spin" />
              )}
            </button>
          </header>
        )}

        <Component {...pageProps} />
      </div>
    </main>
  );
}
