import Link from "next/link";
import {
  FaGithub,
  FaStrava,
  FaGoodreadsG,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="flex justify-between min-h-screen flex-col p-4">
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / About me
          </p>
        </div>
      </header>

      <div className="justify-center items-center flex flex-1 text-justify">
        <p className="sm:text-xl text-lg max-w-2xl leading-relaxed">
          Hi! I&apos;m currently finishing my Master&apos;s degree in
          Quantitative Finance in Vienna after having completed BSc. in
          Economics in the UK. I&apos;m working as a Quant, playing with data,
          always learning new things, and in the little free time I have
          I&apos;m trying to figure out my future - and struggling with it.{" "}
          <br /> I enjoy cycling, running and swimming (yes, a proper triathlon
          is on the menu at some point in the future), I try to read a lot and I
          listen to podcasts way too much. I&apos;m always up for a weekend
          getaway, so when you spot some cheap plane tickets, let me know! Oh,
          and recently I fell in love with coffee, so consider part of this
          website to be my personal coffee diary. <br />
          Next to coffee, you&apos;d ideally find here some interesting articles
          on my blog and an overview of my projects, some of which I&apos;m
          really proud of. <br />
          But honestly, I&apos;m mainly doing this to learn webdev.
        </p>
      </div>

      <div className="items-start flex gap-2 flex-row justify-center p-5">
        <a href="https://github.com/stepva" target="_blank">
          <FaGithub size={50} className="hover:animate-bounce-slow" />
        </a>
        <a href="https://www.strava.com/athletes/20241758" target="_blank">
          <FaStrava size={50} className="hover:animate-bounce-slow" />
        </a>
        <a href="http://twitter.com/stepvacha" target="_blank">
          <FaTwitter size={50} className="hover:animate-bounce-slow" />
        </a>
        <a
          href="https://www.goodreads.com/user/show/155656751-t-p-n-v-cha"
          target="_blank"
        >
          <FaGoodreadsG size={50} className="hover:animate-bounce-slow" />
        </a>
        <a href="https://instagram.com/stepvacha" target="_blank">
          <FaInstagram size={50} className="hover:animate-bounce-slow" />
        </a>
        <a href="http://linkedin.com/in/stepan-vacha/" target="_blank">
          <FaLinkedinIn size={50} className="hover:animate-bounce-slow" />
        </a>
      </div>
    </div>
  );
}
