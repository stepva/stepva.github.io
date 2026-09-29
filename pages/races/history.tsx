import Link from "next/link";

// Type emojis: 🏃🏻‍♂️ running, 🚴🏻‍♂️ cycling, 🔱 triathlon

// ⬇️ Fill in date / name / city / country / finishTime for each race.
//    Order doesn't matter — rows are sorted by date (most recent first).
//    Rows with an empty date drop to the bottom until you fill them in.
const pastRaces = [
  // ── Marathons ─────────────────────────────
  { type: "🏃🏻‍♂️", name: "Prague International Marathon", date: "2024-05-05", city: "Prague", country: "🇨🇿", finishTime: "3:39:01", distance: "42.2km" },
  { type: "🏃🏻‍♂️", name: "European Running Championships", date: "2025-04-13", city: "Brussels - Leuven", country: "🇧🇪", finishTime: "3:27:59", distance: "42.2km" },
  { type: "🏃🏻‍♂️", name: "42nd Athens Marathon. The Authentic", date: "2025-11-09", city: "Athens", country: "🇬🇷", finishTime: "3:25:50", distance: "42.2km" },
  { type: "🏃🏻‍♂️", name: "Run Rome The Marathon", date: "2026-03-22", city: "Rome", country: "🇮🇹", finishTime: "3:07:54", distance: "42.2km" },

  // ── Half Marathons ────────────────────────
  { type: "🏃🏻‍♂️", name: "WRRC Copenhagen Half", date: "2026-09-20", city: "Copenhagen", country: "🇩🇰", finishTime: "1:28:07", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "LCC-Wien Int. Herbst(halb)marathon", date: "2022-10-09", city: "Vienna", country: "🇦🇹", finishTime: "1:42:29", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "40. VCM - Wiener Städtische Halbmarathon", date: "2023-04-23", city: "Vienna", country: "🇦🇹", finishTime: "1:45:03", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "1/2Maraton Praha", date: "2024-04-06", city: "Prague", country: "🇨🇿", finishTime: "1:33:41", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "Oysho Cardiff Half", date: "2025-10-05", city: "Cardiff", country: "🇬🇧", finishTime: "1:26:39", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "Generali Berliner Halbmarathon", date: "2025-04-06", city: "Berlin", country: "🇩🇪", finishTime: "1:43:59", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "EDP Meia Maratona de Lisboa", date: "2025-03-09", city: "Lisbon", country: "🇵🇹", finishTime: "1:46:41", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "21K Valencia Trinidad Alfonso Zurich", date: "2024-10-27", city: "Valencia", country: "🇪🇸", finishTime: "1:29:30", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "Generali Medio Maratón Málaga", date: "2023-12-10", city: "Málaga", country: "🇪🇸", finishTime: "1:37:35", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "Mattoni 1/2Maraton Karlovy Vary", date: "2024-05-18", city: "Karlovy Vary", country: "🇨🇿", finishTime: "1:31:33", distance: "21.1km" },
  { type: "🏃🏻‍♂️", name: "Klánovický 1/2Maraton", date: "2023-10-15", city: "Prague", country: "🇨🇿", finishTime: "1:38:38", distance: "21.1km" },

  // ── Half-distance Triathlons ──────────────
  { type: "🔱", name: "IRONMAN 70.3 Hradec Králové", date: "2024-10-18", city: "Hradec Králové", country: "🇨🇿", finishTime: "5:47:11", distance: "1.9km - 90km - 21.1km" },
  { type: "🔱", name: "IRONMAN 70.3 Zell am See-Kaprun", date: "2025-08-31", city: "Zell am See", country: "🇦🇹", finishTime: "5:31:53", distance: "1.9km - 90km - 21.1km" },
  { type: "🔱", name: "CZECHMAN", date: "2026-06-06", city: "Dolany", country: "🇨🇿", finishTime: "5:06:57", distance: "1.9km - 90km - 21.1km" },

  // ── Shorter Triathlons ────────────────────────────────────
  { type: "🔱", name: "5150 Hradec Králové", date: "2025-08-17", city: "Hradec Králové", country: "🇨🇿", finishTime: "2:40:47", distance: "1.5km - 40km - 10km" },
  { type: "🔱", name: "Chlumecký triatlonek", date: "2024-08-31", city: "Chlumec n/ Cidlinou", country: "🇨🇿", finishTime: "1:06:20", distance: "500 m - 20km - 5km" },
  { type: "🔱", name: "Triatlon Horní Počernice", date: "2022-07-31", city: "Prague", country: "🇨🇿", finishTime: "1:35:58", distance: "750m - 20km - 5km" },

  // ── Shorter road running races ────────────────────────────
  { type: "🏃🏻‍♂️", name: "Běchovice-Praha \#130", date: "2026-09-27", city: "Prague", country: "🇨🇿", finishTime: "39:46", distance: "10km" },
  { type: "🏃🏻‍♂️", name: "Birell 10K Night Race Prague", date: "2026-09-05", city: "Prague", country: "🇨🇿", finishTime: "39:54", distance: "10km" },
  { type: "🏃🏻‍♂️", name: "Běchovice-Praha \#129", date: "2025-09-28", city: "Prague", country: "🇨🇿", finishTime: "39:52", distance: "10km" },
  { type: "🏃🏻‍♂️", name: "Běchovice-Praha \#127", date: "2023-09-24", city: "Prague", country: "🇨🇿", finishTime: "46:26", distance: "10km" },
  { type: "🏃🏻‍♂️", name: "Běchovice-Praha \#126", date: "2022-09-25", city: "Prague", country: "🇨🇿", finishTime: "49:11", distance: "10km" },

  // ── Trail running races ───────────────────────────────────
  { type: "🏃🏻‍♂️", name: "Běhej lesy Klínovec", date: "2025-07-12", city: "Klínovec", country: "🇨🇿", finishTime: "2:06:54", distance: "23km / 633m" },
  { type: "🏃🏻‍♂️", name: "Běhej lesy Železná Ruda", date: "2025-09-20", city: "Železná Ruda", country: "🇨🇿", finishTime: "1:35:57", distance: "18km / 533m" },
  { type: "🏃🏻‍♂️", name: "Běhej lesy Brdy", date: "2026-05-23", city: "Obecnice", country: "🇨🇿", finishTime: "1:59:08", distance: "22km / 527m" },

  // ── Road cycling races ────────────────────────────────────
  { type: "🚴🏻‍♂️", name: "Mallorca 312", date: "2026-04-25", city: "Mallorca", country: "🇪🇸", finishTime: "12:47:19", distance: "312km / 4800m" },
  { type: "🚴🏻‍♂️", name: "Istria 300", date: "2024-09-28", city: "Poreč", country: "🇭🇷", finishTime: "DNF", distance: "300km / 4900m" },
  { type: "🚴🏻‍♂️", name: "Istria 300", date: "2023-10-07", city: "Poreč", country: "🇭🇷", finishTime: "11:09:21", distance: "242km / 4200m" },
  { type: "🚴🏻‍♂️", name: "Mondsee 5 Seen Radmarathon", date: "2025-06-15", city: "Mondsee", country: "🇦🇹", finishTime: "8:08:01", distance: "200km / 2800m" },
  { type: "🚴🏻‍♂️", name: "Okolo Pece", date: "2020-09-12", city: "Pec pod Sněžkou", country: "🇨🇿", finishTime: "2:30:18", distance: "43km / 900m" },
  { type: "🚴🏻‍♂️", name: "Okolo Pece", date: "2022-09-10", city: "Pec pod Sněžkou", country: "🇨🇿", finishTime: "1:56:03", distance: "43km / 900m" },
  { type: "🚴🏻‍♂️", name: "Okolo Pece", date: "2023-09-09", city: "Pec pod Sněžkou", country: "🇨🇿", finishTime: "2:04:53", distance: "43km / 900m" },
  { type: "🚴🏻‍♂️", name: "L'Etape Czech Republic - Horská", date: "2025-08-02", city: "Prachatice", country: "🇨🇿", finishTime: "4:21:41", distance: "109km / 2000m" },

  // ── Relay running ─────────────────────────────────────────
  { type: "🏃🏻‍♂️", name: "Vltava Run", date: "2026-05-09", city: "Zadov - Prague", country: "🇨🇿", finishTime: "34:00:06", distance: "375km relay (42km)" },
];

// ⬇️ Standardized distances that count for personal bests, matched against
//    each race's `distance` string. Races at any other distance (trail,
//    cycling, relay, sprint/olympic tri, ...) never get a PB border.
const pbDistances = [
  "10km", // road 10K
  "21.1km", // half marathon
  "42.2km", // marathon
  "1.9km - 90km - 21.1km", // half ironman
];

// "3:07:54" / "39:46" -> seconds; "DNF" etc. -> NaN
const timeToSeconds = (t: string) => {
  const parts = t.split(":").map(Number);
  if (parts.length < 2 || parts.some(isNaN)) return NaN;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
};

// Treat empty/invalid dates as oldest so unfilled rows sit at the bottom.
const dateValue = (d: string) => {
  const t = new Date(d).getTime();
  return isNaN(t) ? -Infinity : t;
};

// Sort most-recent first
const sortedRaces = [...pastRaces].sort(
  (a, b) => dateValue(b.date) - dateValue(a.date),
);

// Walk each standardized distance chronologically: a race is a PB if it beat
// every earlier result at that distance. The last PB per distance is the
// current one. Updates automatically as new results are added.
const pbKeys = new Set<string>(); // every PB at the time it was set
const currentPbKeys = new Set<string>(); // the standing PB per distance
const raceKey = (r: { date: string; name: string }) => `${r.date}-${r.name}`;

pbDistances.forEach((distance) => {
  let best = Infinity;
  let currentKey: string | null = null;
  [...pastRaces]
    .filter((r) => r.distance === distance)
    .sort((a, b) => dateValue(a.date) - dateValue(b.date))
    .forEach((r) => {
      const secs = timeToSeconds(r.finishTime);
      if (secs < best) {
        best = secs;
        currentKey = raceKey(r);
        pbKeys.add(currentKey);
      }
    });
  if (currentKey) currentPbKeys.add(currentKey);
});

// Count races per type, preserving first-appearance order
const countsByType = pastRaces.reduce((acc, race) => {
  acc.set(race.type, (acc.get(race.type) ?? 0) + 1);
  return acc;
}, new Map<string, number>());

export default function RaceHistory() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <title>Štěpán&apos;s race history</title>
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
            / History
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center mt-10 space-y-6">
        <h1 className="text-3xl font-bold mb-2">Race History</h1>

        <ul className="w-full max-w-md md:max-w-xl space-y-4">
          {sortedRaces.map((race) => {
            const key = raceKey(race);
            const isCurrentPb = currentPbKeys.has(key);
            const isPb = pbKeys.has(key);
            // Current PB: double gold border. Past PB: single gold border.
            const border = isCurrentPb
              ? "border-[6px] border-double border-yellow-500"
              : isPb
                ? "border-2 border-yellow-400"
                : "border-2 border-transparent";
            return (
              <li
                key={key}
                className={`p-4 bg-gray-100 rounded-lg shadow-md ${border}`}
              >
                {/* First row: type + name on the left, finish time on the right */}
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h2 className="text-xl font-semibold dark:text-black">
                    {race.type} {race.name}
                  </h2>
                  <p className="text-gray-700 md:ml-4">
                    🏁 {race.finishTime}
                    {isCurrentPb && (
                      <span title="Current personal best"> 🏆</span>
                    )}
                  </p>
                </div>

                {/* Second row: date left, location middle, distance right.
                  Equal-width grid columns keep the location centered in the
                  tile regardless of date/distance length. */}
                <div className="grid grid-cols-3 items-center">
                  <p className="text-gray-700 text-left">{race.date}</p>
                  <p className="text-gray-500 text-center">
                    {race.city} {race.country}
                  </p>
                  <p className="text-gray-700 text-right">{race.distance}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Summary: total race count and a count per type */}
        <div className="flex flex-col items-center mt-4 mb-2 text-gray-500">
          <p className="text-lg font-semibold dark:text-white">
            {pastRaces.length} races total
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1">
            {Array.from(countsByType).map(([type, count]) => (
              <span key={type}>
                {type} {count}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
