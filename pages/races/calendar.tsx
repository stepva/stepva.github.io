import Link from "next/link";
import { useState, useEffect } from "react";

// 🏃🏻‍♂️, 🚴🏻‍♂️, 🔱

const upcomingRaces = [
  {
    type: "🚴🏻‍♂️",
    name: "Mondsee 5 Seen Radmarathon",
    date: "2025-06-15",
    city: "Mondsee",
    country: "🇦🇹",
  },
  {
    type: "🏃🏻‍♂️",
    name: "Běhej lesy Klínovec",
    date: "2025-07-12",
    city: "Klínovec",
    country: "🇨🇿",
  },
  {
    type: "🚴🏻‍♂️",
    name: "L'Etape Czech Republic Horská",
    date: "2025-08-02",
    city: "Prachatice",
    country: "🇨🇿",
  },
  {
    type: "🔱",
    name: "5150 Hradec Králové",
    date: "2025-08-17",
    city: "Hradec Králové",
    country: "🇨🇿",
  },
  {
    type: "🔱",
    name: "IRONMAN 70.3 Zell am See-Kaprun",
    date: "2025-08-31",
    city: "Zell am See",
    country: "🇦🇹",
  },
  {
    type: "🏃🏻‍♂️",
    name: "Běhej lesy Železná Ruda",
    date: "2025-09-20",
    city: "Železná Ruda",
    country: "🇨🇿",
  },
  {
    type: "🏃🏻‍♂️",
    name: "Běchovice - Praha",
    date: "2025-09-28",
    city: "Prague",
    country: "🇨🇿",
  },
  {
    type: "🏃🏻‍♂️",
    name: "Cardiff Half Marathon",
    date: "2025-10-05",
    city: "Cardiff",
    country: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  },
  {
    type: "🏃🏻‍♂️",
    name: "Athens Marathon. The Authentic",
    date: "2025-11-09",
    city: "Athens",
    country: "🇬🇷",
  },
  // Add more races as needed
];

// Function to calculate how many days left until the race
const calculateDaysUntil = (raceDate: string) => {
  const today = new Date();
  const raceDay = new Date(raceDate);
  const timeDifference = raceDay.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
  return daysDifference > 0 ? `${daysDifference} days left` : "Race has passed";
};

export default function Projects() {
  const [raceCountdowns, setRaceCountdowns] = useState<{
    [key: string]: string;
  }>({});

  // Calculate the countdown for each race on component mount
  useEffect(() => {
    const countdowns = upcomingRaces.reduce((acc, race) => {
      acc[race.name] = calculateDaysUntil(race.date);
      return acc;
    }, {} as { [key: string]: string });

    setRaceCountdowns(countdowns);
  }, []);

  return (
    <div className="flex min-h-screen flex-col p-4">
      <title>Štěpán&apos;s planned races</title>
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/races" className="hover:font-bold transition-opacity">
              Races
            </Link>{" "}
            / Calendar
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center mt-10 space-y-6">
        <h1 className="text-3xl font-bold mb-2">Upcoming Races</h1>

        <ul className="w-full max-w-md md:max-w-xl space-y-4">
          {upcomingRaces.map((race) => (
            <li
              key={race.name}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              {/* First row: Race name and location (stacked on small, inline on large) */}
              <div className="flex flex-col md:flex-row md:justify-between">
                <h2 className="text-xl font-semibold dark:text-black">
                  {race.type} {race.name}
                </h2>
                <p className="text-gray-500 md:ml-4"></p>
              </div>

              {/* Second row: Date on the right, countdown on the left */}
              <div className="flex justify-between">
                <p className="text-gray-500">
                  {race.city}, {race.country}
                </p>
                <div className="flex flex-row">
                  <p className="text-gray-500">
                    {raceCountdowns[race.name]} &nbsp; &nbsp;
                  </p>
                  <p className="text-gray-700">{race.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
