import Link from "next/link";
import HeroCards from "../component/HeroCards";
import { heroData } from "../../../../lib/placeholder";

const Hero = () => {
  const { title, description, cta, image } = heroData[0];
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between shadow-lg p-8 my-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-accent mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-accent-foreground mb-6 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <Link
            href={cta.href}
            className="inline-block bg-accent text-primary font-bold px-8 py-3 rounded-lg"
          >
            {cta.label}
          </Link>

          {/*link "About Us" */}
            <Link
              href="/aboutus"
              className="inline-block bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition"

            >
              Click here to get to know us better
            </Link>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src={image.src}
            alt={image.alt}
            className="w-64 h-64 object-contain rounded-xl shadow-lg border-4 border-accent/30 bg-white"
          />
        </div>
      </section>
      <HeroCards />
    </>
  );
};

export default Hero;
