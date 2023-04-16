import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <title>Štěpán&apos;s projects</title>
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / Projects
          </p>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center text-justify mt-3 sm:mt-6">
        <div className="flex">
          <a href={"https://github.com/stepva/adventofcode"} target="_blank">
            <div className="hover:bg-gray-200 hover:dark:text-black group p-2 flex flex-col sm:flex-row max-w-3xl h-44 sm:h-40 items-center">
              <div className="sm:mr-5 hidden sm:block sm:mb-0 w-0 sm:w-1/2 h-0 sm:h-1/3 relative sm:text-3xl md:text-4xl text-right">
                🎄🎄🎄
              </div>
              <div>
                <span className="text-2xl">Advent of Code solutions</span>
                <p className="text-justify text-sm">
                  My Advent of Code solutions, attempted in Python and Go. I
                  first started in 2021 and I am by far not done yet but I hope
                  to collect all of the stars in the future. It has become a
                  tradition every December, looking forward to the next one!
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex">
          <a href={"https://github.com/stepva/chatalysis"} target="_blank">
            <div className="hover:bg-gray-200 hover:dark:text-black group p-2 flex flex-col sm:flex-row max-w-3xl h-44 sm:h-40 items-center">
              <div className="sm:mr-5 sm:mb-0 w-0 sm:w-1/2 h-0 sm:h-1/3 relative">
                <Image
                  src="https://github.com/stepva/chatalysis/blob/master/resources/images/logo.png?raw=true"
                  alt="Chatalysis logo"
                  fill
                />
              </div>
              <div>
                <span className="text-2xl">Chatalysis</span>
                <p className="text-justify text-sm">
                  My very first big project. Chatalysis lets you analyse and
                  visualise stats from your own Facebook Messenger and Instagram
                  chats in a nice and clean way. All on your computer, without
                  giving your messages and data to any third-party apps.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex">
          <a
            href={
              "https://warwick.ac.uk/fac/soc/economics/research/wmesp/manage/13_-_stepan_vacha.pdf"
            }
            target="_blank"
          >
            <div className="hover:bg-gray-200 hover:dark:text-black group p-2 flex flex-col sm:flex-row max-w-3xl h-56 sm:h-40 items-center">
              <div className="sm:ml-6 sm:mr-5 sm:mb-0 w-0 sm:w-5/12 h-0 sm:h-1/2 relative">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/56/WarwickLogo.png"
                  alt="Warwick logo"
                  fill
                />
              </div>
              <div>
                <span className="text-2xl">
                  Labour demand in the UK during the COVID-19 pandemic: evidence
                  from online job postings
                </span>
                <p className="text-justify text-sm">
                  My Undergraduate dissertation in Economics written at the
                  University of Warwick as part of a final year Research in
                  Applied Economics, awarded the Rohin Modasia Prize and
                  published in Warwick Monash Economics Student Papers (WM-ESP).
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
