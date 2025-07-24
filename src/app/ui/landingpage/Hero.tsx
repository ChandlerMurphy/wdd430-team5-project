import Link from "next/link";
import HeroCards from "../component/HeroCards";
import { heroData } from "../../../../lib/placeholder";
import Image from "next/image";

const Hero = () => {
  const { title, description, cta, image } = heroData[0];
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-5">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-accent mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-accent-foreground mb-6 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <Link
            href={cta.href}
            className="inline-block bg-accent text-primary rounded-lg"
          >
            {cta.label}
          </Link>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <Image
            width={100}
            height={100}
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
