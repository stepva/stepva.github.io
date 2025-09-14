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
      <title>About Štěpán</title>
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
          After having completed a BSc. in Economics at the University of
          Warwick, UK, I proceeded with my Master&apos;s degree in Quantitative
          Finance in Vienna at WU. I returned back to Prague to continue working
          in a perhaps morally questionable, but definitely interesting, booming
          and fun industry - esports betting, where I&apos;m currently leading a
          team of quants and developers responsible for developing predictive
          mathematical models.
          <br /> In my free time, you can usually find me either eating,
          sleeping or training. I enjoy working out at the gym, as well as
          cycling, running and swimming, regularly pushing myself at marathons,
          triathlons or other race events. I try to read a lot and I listen to
          podcasts way too much. Oh, and I also fell in love with specialty
          coffee, so consider part of this website to be my personal coffee
          diary. <br />
          Next to my favorite coffee roasteries, you&apos;d ideally find here
          some interesting articles on my blog and an overview of my projects as
          well as my accomplishments and plans when it comes to races. But
          honestly, I&apos;m mainly doing this to learn webdev.
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
