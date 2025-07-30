import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="max-w-5xl m-auto py-30 px-6 sm:px-12 text-black">
      <div className="border border-gray-300 rounded-xl p-8 shadow-sm bg-white">
        <h1 className="text-3xl font-extrabold text-center text-black mb-6">
          About us
        </h1>

        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Celebrating Craftsmanship, Empowering Creators
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Handcrafted Haven, we believe that every handmade item tells a
              story. Our mission is to give talented artisans a space where
              their creativity can thrive and their work can reach those who
              truly appreciate the art of making by hand.
            </p>
          </div>
          <div className="md:flex-1 flex justify-center ">
            <Image
              src="/handcrafted-2.webp"
              alt="Handcrafted Treasures"
              width={400}
              height={300}
              className="shadow-lg object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-accent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Handcrafted Haven is an innovative web application that aims to
              provide a platform for artisans and crafters to showcase and sell
              their unique handcrafted items.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We strive to create a safe, easy-to-use, and inspiring marketplace
              that empowers creators and connects them with people who
              appreciate craftsmanship and authenticity.
            </p>
          </div>
          <div className="md:flex-1 flex justify-center">
            <Image
              src="/handcrafted-3.webp"
              alt="Artisan Working"
              width={400}
              height={300}
              className="shadow-lg object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-accent">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We are a small, dedicated team that values community, creativity,
            and user empowerment. Thanks for being part of our journey!
          </p>
          <Image
            src="/handcrafted-4.webp"
            alt="Our Team"
            width={600}
            height={400}
            className="shadow-lg mx-auto object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
