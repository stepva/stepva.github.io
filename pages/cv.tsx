import Link from "next/link";

/* ════════════════════════════════════════════════════════════════════════
   ✏️  EDIT YOUR CV HERE
   Everything below this banner is your data. Change the text, add or remove
   entries from the arrays — the page rebuilds itself automatically.
   Pre-filled from your LinkedIn export — tweak the wording however you like.
   ════════════════════════════════════════════════════════════════════════ */

// ── Header: who you are & how to reach you ──────────────────────────────
const profile = {
  name: "Štěpán Vácha",
  headline: "Quant Engineering Manager",
  location: "Prague, Czech Republic",
  // Contact links shown under your name. Remove any you don't want on the CV.
  contacts: [
    { label: "step.vacha@gmail.com", href: "mailto:step.vacha@gmail.com" },
    { label: "linkedin.com/in/stepan-vacha", href: "https://linkedin.com/in/stepan-vacha/" },
    { label: "github.com/stepva", href: "https://github.com/stepva" },
    { label: "stepva.github.io", href: "https://stepva.github.io" },
  ],
};

// ── A short intro paragraph (optional — set to "" to hide) ──────────────
const summary =
  `Combining technical and quantitative background with management skills, I have grown with Oddin.gg from analyst to multi-team engineering manager over more than six years. I'm currently focusing on scaling the teams, navigating them through AI shifts, and combining high-quality mathematical research with fast delivery and business needs. I value honesty, curiosity, and hard work while believing that the best job is achieved when people enjoy what they are doing.`

// ── Work experience ─────────────────────────────────────────────────────
//    Grouped by company: each company holds its roles (most recent first), so
//    a single-company progression reads as one block. The roles are visually
//    connected with a line down the left, and the company's overall tenure is
//    derived automatically from the first/last role.
//    note (optional): a one-line company description, shown in grey.
const experience = [
  {
    company: "Oddin.gg",
    location: "Prague, Czech Republic",
    note: "Provider of esports odds feeds, risk management, iFrame solutions and infrastructure for sportsbooks.",
    roles: [
      {
        role: "Quant Engineering Manager",
        start: "Apr 2025",
        end: "Present",
        bullets: [
          "Leading teams of quants, mathematicians and Python developers responsible for predictive mathematical models and their end-to-end implementation.",
          "Focusing on hiring, planning, delivery and day-to-day operations across nine projects and products.",
          "Grew the headcount from 3 to 9 people while staying hands-on on the technical level with active code reviews, software development and decision making.",
        ],
      },
      {
        role: "Quant / Python Developer / Data Engineer",
        start: "Jul 2021",
        end: "Mar 2025",
        bullets: [
          "Data processing, data analysis, model validation and software development; designed and built data solutions from scratch and implemented quantitative models.",
          "Scaled automated data pipelines for real-time processing and took ownership over full bet tickets data flow.",
          "Supported the creation of a specialised risk management team with tailored and automated data processing, datasets and a warehouse solution.",
        ],
      },
      {
        role: "Esports Trader & Analyst",
        start: "Apr 2020",
        end: "Jun 2021",
        bullets: [
          "First person in the company to analyze bet tickets, building the tools and data processing for better understanding of our models' and trading performance.",
        ],
      },
    ],
  },
];

// ── Education (most recent first) ───────────────────────────────────────
const education = [
  {
    degree: "MSc Quantitative Finance",
    school: "WU (Wirtschaftsuniversität Wien)",
    location: "Vienna, Austria",
    start: "Sep 2021",
    end: "Sep 2023",
    details: ["Courses in Mathematics, Probability, Optimization, Continuous Time Finance and Asset Pricing."],
  },
  {
    degree: "BSc (Hons) Economics",
    school: "University of Warwick",
    location: "Coventry, United Kingdom",
    start: "Oct 2018",
    end: "Jul 2021",
    details: ["First Class result, with an award-winning final year project.", "Focus on Econometrics, Statistics, Applied Economics and Programming."],
  },
];

// ── Skills (single line, same style as Languages) ───────────────────────
const skills = [
  "AI tools (LLMs, coding agents)",
  "Python",
  "SQL (including DB migrations)",
  "Git (and Github Actions)",
  "AWS (ECS, Athena, S3, Cloudwatch)",
  "Docker",
  "Grafana",
  "Terraform"
];

// ── Languages ───────────────────────────────────────────────────────────
const languages = ["Czech (native)", "English (fluent)", "German (B2)", "Spanish (A2)"];

/* ════════════════════════════════════════════════════════════════════════
   ⬇️  Below is the layout. You usually don't need to touch this — but it's
   plain Tailwind, so tweak away if you want to restyle anything.
   ════════════════════════════════════════════════════════════════════════ */

// Small reusable heading for each CV section.
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold uppercase tracking-wide border-b border-gray-400 pb-1 mb-3">
      {children}
    </h2>
  );
}

export default function CV() {
  return (
    <div className="flex min-h-screen flex-col p-4 print:p-0">
      <title>Štěpán Vácha — CV</title>

      {/* On-screen breadcrumb + actions. Hidden when printing (no-print). */}
      <header className="no-print flex items-center justify-between p-3 max-w-3xl w-full mx-auto">
        <p className="text-xl">
          <Link href="/" className="hover:font-bold transition-opacity">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/about" className="hover:font-bold transition-opacity">
            About
          </Link>{" "}
          / CV
        </p>
        <button
          onClick={() => window.print()}
          className="border border-gray-400 rounded-md px-4 py-1 text-sm hover:bg-gray-200 hover:dark:text-black transition-colors"
        >
          ⬇ Download PDF
        </button>
      </header>

      {/* The CV sheet. max-w + mx-auto keeps it readable on screen and tidy
          on paper. print:text-black forces dark text even in dark mode. */}
      <article className="cv-sheet w-full max-w-3xl mx-auto mt-4 print:mt-0 print:max-w-none print:text-black space-y-8 leading-relaxed">
        {/* ─── Header ─── */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="text-xl mt-1">
            {profile.headline}{" "}
            <span className="text-gray-500">in {profile.location}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm">
            {profile.contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="hover:font-bold underline-offset-2 hover:underline"
              >
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* ─── Summary ─── */}
        {summary && (
          <section>
            <SectionTitle>Profile</SectionTitle>
            <p className="text-justify">{summary}</p>
          </section>
        )}

        {/* ─── Experience (roles grouped under each company) ─── */}
        <section>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-5">
            {experience.map((company, i) => (
              <div key={i}>
                {/* Company header: name + total tenure (first role's start →
                    latest role's end), with location and optional description. */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <p className="font-bold text-lg">{company.company}</p>
                  <p className="text-gray-500 text-sm whitespace-nowrap">
                    {company.roles[company.roles.length - 1].start} –{" "}
                    {company.roles[0].end}
                  </p>
                </div>
                {company.location && (
                  <p className="text-gray-500 text-sm">{company.location}</p>
                )}
                {company.note && (
                  <p className="text-gray-500 text-sm italic">{company.note}</p>
                )}

                {/* Roles, connected by a line down the left to show the
                    single-company progression. */}
                <div className="border-l border-gray-300 pl-4 ml-1 mt-2 space-y-5">
                  {company.roles.map((r, j) => (
                    <div key={j} className="break-inside-avoid">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <p className="font-semibold">{r.role}</p>
                        <p className="text-gray-500 text-sm whitespace-nowrap">
                          {r.start} – {r.end}
                        </p>
                      </div>
                      {r.bullets.length > 0 && (
                        <ul className="list-disc list-outside ml-5 mt-1 space-y-1">
                          {r.bullets.map((b, k) => (
                            <li key={k}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-5">
            {education.map((ed, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <p className="font-semibold">
                    {ed.degree}
                    {ed.school && (
                      <span className="font-normal"> · {ed.school}</span>
                    )}
                  </p>
                  <p className="text-gray-500 text-sm whitespace-nowrap">
                    {ed.start} – {ed.end}
                  </p>
                </div>
                {ed.location && (
                  <p className="text-gray-500 text-sm">{ed.location}</p>
                )}
                {ed.details.length > 0 && (
                  <ul className="list-disc list-outside ml-5 mt-1 space-y-1">
                    {ed.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className="break-inside-avoid">
          <SectionTitle>Tech skills</SectionTitle>
          <p>{skills.join(" · ")}</p>
        </section>

        {/* ─── Languages ─── */}
        <section className="break-inside-avoid">
          <SectionTitle>Languages</SectionTitle>
          <p>{languages.join(" · ")}</p>
        </section>

      </article>

      <div className="h-8 print:hidden" />
    </div>
  );
}
