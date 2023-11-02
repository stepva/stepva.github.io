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
          I have recently finished my Master&apos;s degree in Quantitative
          Finance in Vienna after having completed a BSc. in Economics in the
          UK. I&apos;m working as a Quant in a perhaps morally questionable, but
          definitely interesting, booming and fun industry - esports betting.
          <br /> In my free time, I aspire to become a hybrid athlete. I enjoy
          working out at the gym, as well as cycling, running and swimming - my
          first Ironman 70.3 is coming up in the summer. I try to read a lot and
          I listen to podcasts way too much. Oh, and I also fell in love with
          specialty coffee, so consider part of this website to be my personal
          coffee diary. <br />
          I like to call myself a data barista - I think that data and coffee
          have a lot in common. One has to take care of its data just like
          farmers do with coffee beans, so that they can brew a delicious
          analysis out of it.
          <br />
          Next to coffee, you&apos;d ideally find here some interesting articles
          on my blog and an overview of my projects, some of which I&apos;m
          really proud of. But honestly, I&apos;m mainly doing this to learn
          webdev.
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
