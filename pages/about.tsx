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
    <div className="flex justify-center items-center min-h-screen flex-col">
      <header className="flex flex-row p-3 justify-center">
        <div className="order-1 text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / About me
          </p>
        </div>
      </header>
      <div className="min-h-2/3 max-w-2xl justify-center items-center flex flex-1 text-justify">
        <p className="text-xl leading-relaxed">
          Hi! I&apos;m currently finishing my Master&apos;s degree in
          Quantitative Finance after having completed BSc. in Economics. More
          importantly, though, I&apos;m working as a Quant, always learning new
          things, and in the little free time I have I&apos;m trying to figure
          out my future - and struggling with it. <br /> I enjoy cycling,
          running and swimming (yes, a proper triathlon is on the menu at some
          point in the future), I try to read a lot and I listen to podcasts way
          too much. Oh, and recently I fell in love with coffee, so consider
          part of this website to be my personal coffee diary. <br />
          Next to coffee, you&apos;d ideally find here some interesting articles
          on my blog and an overview of my projects, some of which I&apos;m
          really proud of. <br />
          And I wonder how you got here.
        </p>
      </div>
      <div className="order-2 items-start min-h-1/3 flex flex-row justify-center p-10">
        <div className="order-1 p-2">
          <a href="https://github.com/stepva" target="_blank">
            <FaGithub size={50} />
          </a>
        </div>
        <div className="order-2 p-2">
          <a href="https://www.strava.com/athletes/20241758" target="_blank">
            <FaStrava size={50} />
          </a>
        </div>
        <div className="order-3 p-2">
          <a href="http://twitter.com/stepvacha" target="_blank">
            <FaTwitter size={50} />
          </a>
        </div>
        <div className="order-4 p-2">
          <a
            href="https://www.goodreads.com/user/show/155656751-t-p-n-v-cha"
            target="_blank"
          >
            <FaGoodreadsG size={50} />
          </a>
        </div>
        <div className="order-5 p-2">
          <a href="https://instagram.com/stepvacha" target="_blank">
            <FaInstagram size={50} />
          </a>
        </div>
        <div className="order-6 p-2">
          <a href="http://linkedin.com/in/stepan-vacha/" target="_blank">
            <FaLinkedinIn size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
