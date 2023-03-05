import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Index() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const toggleDarkMode = (dark: boolean) => {
    if (dark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    // setMounted(checked);
  };

  return (
    <div className="flex justify-center min-h-screen flex-col">
      <div className="order-1 justify-center items-end h-1/2 p-2 flex flex-row">
        <div className="order-1 text-right">
          <p className="font-bold text-6xl">hi, I&apos;m Štěpán</p>
        </div>
        <div className="order-2">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={theme === "dark"}
            onChange={toggleDarkMode}
            size={12}
          />
        </div>
      </div>
      <div className="order-2 items-start h-1/2 flex flex-row justify-center">
        <div className="order-1 text-center p-2">
          <p className="text-xl hover:text-2xl hover:font-bold transition-opacity">
            <Link href="/about">About me</Link>
          </p>
        </div>
        <div className="order-2 text-center p-2">
          <p className="text-xl hover:text-2xl hover:font-bold transition-opacity">
            <Link href="/">Blog</Link>
          </p>
        </div>
        <div className="order-2 text-center p-2">
          <p className="text-xl hover:text-2xl hover:font-bold transition-opacity">
            <Link href="/">Projects</Link>
          </p>
        </div>
        <div className="order-3 text-center p-2">
          <p className="text-xl hover:text-2xl hover:font-bold transition-opacity">
            <Link href="/">Coffee</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
