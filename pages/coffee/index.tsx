import Link from "next/link";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/map"), {
  ssr: false,
});

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <header className="flex p-3 justify-center">
        <div className="text-center">
          <p className="text-xl">
            <Link href="/" className="hover:font-bold transition-opacity">
              Home
            </Link>{" "}
            / Coffee
          </p>
        </div>
      </header>

      <div className="flex justify-center items-end text-justify mt-3 sm:mt-6">
        <p className="max-w-2xl">
          My personal coffee diary, where I note down great coffee I bought in
          great cafés all around the world. I&apos;m still learning, pretending
          that I understand specialty coffee, experimenting with grinds and
          brews and just writing down what I liked and disliked. <br />I enjoy
          the story behing each roast, I like to connect coffee with travelling
          and I often bring new beans from my trips - the{" "}
          <a href="https://europeancoffeetrip.com" className="hover:font-bold">
            European Coffee Trip
          </a>{" "}
          project has been very helpful with that. Occassionally I also buy
          stuff and coffee from{" "}
          <a href="https://www.kofio.co" className="hover:font-bold">
            Kofio
          </a>
          .
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <MapWithNoSSR />
      </div>

      <div className="flex justify-center items-center text-justify mt-4">
        <p className="max-w-2xl">
          I&apos;m currently using the{" "}
          <a href="https://1zpresso.coffee/q/" className="hover:font-bold">
            1Zpresso Q2
          </a>{" "}
          manual grinder, which I&apos;m very happy with. I started my coffee
          journey with french press, but I&apos;ve since moved towards{" "}
          <a
            href="https://www.hario-europe.com/collections/v60-dripper"
            className="hover:font-bold"
          >
            Hario V60
          </a>{" "}
          and{" "}
          <a href="https://aeropress.com" className="hover:font-bold">
            Aeropress
          </a>
          , both of which I&apos;m trying to master now. I&apos;ve also recently
          started using the{" "}
          <a href="https://ibrew.coffee" className="hover:font-bold">
            iBrewCoffee
          </a>{" "}
          app and I can only recommend it.
        </p>
      </div>
      <div className="flex justify-center items-center mt-6 mb-5">
        <p className="text-2xl hover:font-bold">
          <Link href="/coffee/" className="hover:font-bold transition-opacity">
            All coffee posts
          </Link>
        </p>
      </div>
    </div>
  );
}
