import Link from "next/link";

export default function Index() {
  return (
    <div className="flex justify-center min-h-screen flex-col">
      <div className="order-1 text-center items-end h-1/2 p-2">
        <p className="font-bold text-6xl">hi, I'm Štěpán</p>
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
