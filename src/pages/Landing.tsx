import { Layout } from "../components/Layout";
import { useBooking } from "../context/BookingContext";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiScissors, FiStar } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { useRef } from "react";

const heroImg = "/images/other/barber-1.png";

export const LandingPage = () => {
  const { openBooking, isLoaded } = useBooking();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-black text-white relative overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-20 py-14 md:py-24 z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-8xl font-extrabold text-[var(--secondary-color)] drop-shadow-lg mb-4"
          >
            Aura Cuts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-2xl md:text-3xl text-white mb-4 md:mb-6 font-light"
          >
            By Zee The Barber
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-base md:text-lg text-white/90 mb-6 md:mb-10 max-w-2xl"
          >
            Step into Aura Cuts, Orland Park's newest barbershop, and experience the fresh energy of a truly modern grooming destination. Located on LaGrange Road, Auracuts offers a skilled team ready to craft the perfect look, tailored just for you. Discover a place where classic techniques meet contemporary styles, leaving you feeling confident and looking your absolute best. Aura Cuts is more than just a haircut; it's an experience.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.07, boxShadow: "0 0 0 2px var(--secondary-color)" }}
            whileTap={{ scale: 0.97 }}
            onClick={openBooking}
            disabled={!isLoaded}
            className="border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] px-8 py-3 rounded-lg font-bold text-lg tracking-wider transition-colors duration-200 bg-black hover:bg-[var(--secondary-color)] hover:text-black focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] shadow-lg"
          >
            BOOK NOW
          </motion.button>
        </div>

        {/* Hero Image with subtle opaque background */}
        <motion.div
          className="
            flex-1 flex items-center justify-center relative z-0 p-0
            w-full h-64 sm:h-80 md:h-[480px] md:w-[400px] lg:h-[540px] lg:w-[480px]
          "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full flex justify-center">
            {/* Opaque panel behind image */}
            <img
              src={heroImg}
              alt="Barbershop"
              className="
                object-cover rounded-none md:rounded-2xl shadow-none md:shadow-2xl
                w-full h-64 sm:h-80 md:h-[480px] md:w-[400px] lg:h-[540px] lg:w-[480px]
                border-none
                transition-all
              "
            />
          </div>
        </motion.div>

        {/* Scroll Down Animation */}
        <motion.div
          className="
            relative mt-6 mb-2 self-center flex flex-col items-center cursor-pointer
            md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:z-20
          "
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[var(--secondary-color)] text-lg font-semibold">Scroll Down</span>
          <FiArrowRight className="rotate-90 text-[var(--secondary-color)] text-3xl mt-1" />
        </motion.div>
      </section>

      {/* STORY OF ZEE */}
      <section ref={scrollRef} className="py-24 px-6 md:px-32 bg-black text-white md:border-t md:border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary-color)] mb-4">Story of Zee</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            From humble beginnings to a passion for style, Zee has built Aura Cuts as a sanctuary for those who value craft, detail, and a personal touch. Discover the journey and the vision behind every cut.
          </p>
          <Link
            to="/story"
            className="inline-flex items-center gap-2 text-[var(--secondary-color)] font-semibold text-lg hover:underline group"
          >
            Read Our Story <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* WHY CHOOSE AURA CUTS */}
      <section className="py-24 px-6 md:px-32 bg-black text-white md:border-t md:border-white/10">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary-color)] mb-4">Why Choose Aura Cuts</h2>
          <ul className="list-disc pl-6 text-lg md:text-xl space-y-2">
            <li>Mastery in modern and classic styles</li>
            <li>Personalized service in a welcoming atmosphere</li>
            <li>Premium products and attention to detail</li>
            <li>Relaxing, luxurious experience every visit</li>
          </ul>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-32 bg-black text-white md:border-t md:border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary-color)] mb-8">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Aseel Y."
              text="This barbershop is truly exceptional! The staff is professional, friendly, and highly skilled specially (zee) the barber. The place is always clean and welcoming, and they really take their time to make sure you leave looking your best. I’ve tried many barbershops, but this one stands out in every way. Highly recommended!"
            />
            <TestimonialCard
              name="Hugo S."
              text="I’ve been to a lot of barbers, but this is by far the best experience I’ve had. The shop is clean, professional, and has a great atmosphere. My barber really takes the time to listen, pays attention to detail, and makes sure the cut is exactly what I want. I always leave looking sharp and feeling confident. Highly recommend to anyone looking for consistent, high-quality service!"
            />
            <TestimonialCard
              name="Mohammad A."
              text="I’ve been to many barbers but this one truly stands out. Louis is not only skilled and professional but also super friendly and welcoming. He takes his time to make sure every cut is perfect and you can tell he really cares about his work and his clients. The shop is always clean and has a great vibe. Highly recommend if you’re looking for a fresh clean cut and a great experience every time!👌🏽🔥🔥"
            />
          </div>
        </motion.div>
      </section>

      {/* OUR SERVICES (Icon-based, summarized) */}
      <section className="py-24 px-6 md:px-32 bg-black text-white md:border-t md:border-white/10">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary-color)] mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCategory
              Icon={FiScissors}
              title="Cuts"
              items={["Haircut", "Kids Haircut", "Freestyle Designs"]}
              blurb="Precision cuts from classic to modern, tailored for all ages."
              imageSrc="/images/other/barbershop-alt.png"
              imageAlt="Cuts - barbershop"
            />
            <ServiceCategory
              Icon={FiStar}
              title="Grooming & Care"
              items={["Haircut + Beard", "Shave with Hot Towel", "Beard & Facial", "Threading", "Waxing"]}
              blurb="Detail-driven grooming with hot towel shaves and facial care."
              imageSrc="/images/other/barber-1.png"
              imageAlt="Grooming and Care"
            />
            <ServiceCategory
              Icon={FaCrown}
              title="Premium & Extras"
              items={["Groom Package", "Massage", "Hair Dye", "House Call"]}
              blurb="Elevated experiences and premium add-ons, at the shop or your home."
              imageSrc="/images/other/groom-room.png"
              imageAlt="Premium and Extras"
            />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(230,189,55,0.15)" }}
      className="bg-black border border-[var(--secondary-color)] rounded-xl p-6 shadow-lg text-white"
    >
      <p className="text-lg mb-4">"{text}"</p>
      <div className="text-[var(--secondary-color)] font-bold">{name}</div>
    </motion.div>
  );
}

function ServiceCategory({ Icon, title, items, blurb, imageSrc, imageAlt }: { Icon: React.ComponentType<{ className?: string, size?: number }>; title: string; items: string[]; blurb: string; imageSrc?: string; imageAlt?: string; }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 4px 32px 0 rgba(230,189,55,0.18)" }}
      className="bg-black border border-[var(--secondary-color)] rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[var(--secondary-color)]"><Icon size={28} /></span>
        <h3 className="text-2xl font-bold text-[var(--secondary-color)]">{title}</h3>
      </div>
      {imageSrc && (
        <div className="overflow-hidden rounded-lg mb-4 border border-white/20">
          <img src={imageSrc} alt={imageAlt || title} className="w-full h-40 object-cover" />
        </div>
      )}
      <p className="text-white/90 mb-4">{blurb}</p>
      <ul className="list-disc pl-5 space-y-1 text-white">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}