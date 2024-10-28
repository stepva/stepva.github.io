import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const races = [
  { type: "Marathons", timesCompleted: 1, bestTime: "3:39:01" },
  { type: "Half Marathons", timesCompleted: 7, bestTime: "1:29:30" },
  { type: "Half-distance Triathlons", timesCompleted: 1, bestTime: "5:47:11" },
];

export default function Projects() {
  const [activeRace, setActiveRace] = useState<string | null>(null);

  const handleClick = (raceType: string) => {
    setActiveRace(activeRace === raceType ? null : raceType); // Toggle the clicked race
  };
  return (
    <div className="flex min-h-screen flex-col p-4">
      <title>Štěpán&apos;s races</title>
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / Races
          </p>
        </div>
      </header>

      <div className="flex justify-center items-end text-justify mt-3 sm:mt-6">
        <p className="max-w-2xl">
          I love sports - particularly running, cycling and swimming, which is
          how I got into triathlons. Even though I&apos;m not necessarily very
          competitive when it comes to others, I enjoy pushing myself and seeing
          how far I can go and what my body can do. That&apos;s why I really
          enjoy racing as well - I take it as a challenge with a set goal,
          whether it is just finishing or a new personal best time. And, truth
          be told, I really like colecting finisher medals! <br />
          Below you can see some of my accomplishments which I&apos;m most proud
          of, as well as an up-to-date race calender of all the races I&apos;m
          signed up for currently and looking forward to!
        </p>
      </div>

      <div className="flex flex-col items-center mt-10 space-y-6">
        {races.map((race) => (
          <div key={race.type} className="w-full">
            {/* Main Race Block */}
            <div
              onMouseEnter={() => setActiveRace(race.type)}
              onMouseLeave={() => setActiveRace(null)}
              onClick={() => handleClick(race.type)}
              className="relative p-4 bg-gray-100 dark:text-black hover:bg-gray-200 cursor-pointer text-center rounded-lg w-64 mx-auto"
            >
              {/* Main Content - Race Type */}
              <span className="font-bold">{race.type}</span>

              {/* Left Column (Desktop Only) - Times Completed */}
              {activeRace === race.type && (
                <div className="hidden md:flex absolute dark:text-white left-0 top-0 h-full items-center pr-4 w-24 text-left transform -translate-x-[110%]">
                  <span className="font-semibold">
                    🏅 {race.timesCompleted}x
                  </span>
                </div>
              )}

              {/* Right Column (Desktop Only) - Best Time */}
              {activeRace === race.type && (
                <div className="hidden md:flex absolute dark:text-white right-0 top-0 h-full items-center pl-4 w-48 text-right transform translate-x-[110%]">
                  <span className="font-semibold">🏆 {race.bestTime}</span>
                </div>
              )}
            </div>

            {/* Mobile View - Display extra info below with transparent background, outside the grey block */}
            {activeRace === race.type && (
              <div className="block md:hidden mt-2 dark:text-white space-y-2 text-center w-64 mx-auto">
                <div className="font-semibold">🏅 {race.timesCompleted}x</div>
                <div className="font-semibold">🏆 {race.bestTime}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10 space-y-6">
        And 2 shorter triathlons, 2 shorter run races, and 5 road cycling
        races...
      </div>

      <div className="flex justify-center items-center mt-10 mb-5">
        <p className="text-2xl hover:font-bold">
          <Link
            href="/races/calendar"
            className="hover:font-bold transition-opacity"
          >
            My race calendar
          </Link>
        </p>
      </div>
    </div>
  );
}
