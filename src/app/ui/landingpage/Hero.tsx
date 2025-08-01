import Link from "next/link";
import { heroData } from "../../../../lib/placeholder";
import ScrollingArts from "./FeaturedItems";

const Hero = () => {
  const { title, description, cta, featuredItems } = heroData[0];
  return (
    <>
      <section className="bg-accent text-white flex flex-col items-center justify-center h-auto gap-10 pt-40">
        <div className="lg:text-5xl text-2xl md:text-4xl text-secondary text-center">
          {title.slice(0, 15)}
          <span className="text-white">{title.slice(15, 40)}</span>
        </div>
        <p className="max-w-2xl w-[80%] m-auto text-center lg:text-3xl text-base md:text-3xl">
          {description}
        </p>
        <div className="flex flex-row gap-10">
          <Link
            href={cta.href}
            style={{ backgroundColor: "#7c309cff" }}
            className="inline-block bg-secondary p-4 text-white rounded-lg"
          >
            {cta.label}
          </Link>
          <Link
            href={featuredItems.href}
            className="inline-block border-2 border-white p-4 text-white rounded-lg"
          >
            {featuredItems.label}
          </Link>
        </div>
        <div className="bg-white w-full">
          <ScrollingArts />
        </div>
      </section>
    </>
  );
};

export default Hero;
