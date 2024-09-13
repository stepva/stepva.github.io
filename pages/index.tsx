import Link from "next/link";

export default function Index() {
  return (
    <>
      <title>hi, I&apos;m Štěpán</title>
      <div className="flex justify-center flex-col h-[calc(100vh-56px)] p-4">
        <div className="justify-center items-end flex flex-1 flex-row">
          <div className="text-center">
            <p className="font-bold text-6xl">hi, I&apos;m Štěpán</p>
          </div>
        </div>
        <div className="md:items-start h-1/2 flex flex-col md:flex-row md:justify-center p-4 md:p-0">
          <div className="text-center md:p-2">
            <p className="text-xl hover:font-bold">
              <Link href="/about">About me</Link>
            </p>
          </div>
          <div className="text-center md:p-2">
            <p className="text-xl hover:font-bold">
              <Link href="/races/">Races</Link>
            </p>
          </div>
          <div className="text-center md:p-2">
            <p className="text-xl hover:font-bold">
              <Link href="/blog/">Blog</Link>
            </p>
          </div>
          <div className="text-center md:p-2">
            <p className="text-xl hover:font-bold">
              <Link href="/projects/">Projects</Link>
            </p>
          </div>
          <div className="text-center md:p-2">
            <p className="text-xl hover:font-bold">
              <Link href="/coffee/">Coffee</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
