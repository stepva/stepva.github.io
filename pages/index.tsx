import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <>
      <div className="flex justify-center h-screen flex-col">
        <header className="flex flex-row p-3 justify-center">
          <button>
            <SunIcon className="w-6" />
          </button>
        </header>
        <div className="order-1 justify-center items-end h-1/2 p-2 flex flex-1 flex-row">
          <div className="order-1 text-center">
            <p className="font-bold text-6xl">hi, I&apos;m Štěpán</p>
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
    </>
  );
}
