import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import { useBooking } from "../context/BookingContext";

type Block = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const blocks: Block[] = [
  {
    title: "A Chair, A Dream",
    text:
      "Zee’s story began with a borrowed chair in a tiny corner of a friend’s shop. No sign outside, just word of mouth and a commitment to make every cut count. Neighbors would stop in after work, kids on Saturdays, and soon his chair was never empty.",
    image: "/images/other/barbershop-cropped.png",
    alt: "Early days in a small barbershop space",
  },
  {
    title: "Craft Before Clout",
    text:
      "While trends came and went, Zee doubled down on craft—mastering fades, shaping beards, and learning what style meant to each person in the chair. The goal was simple: precision, comfort, and a look that felt like you.",
    image: "/images/other/barbershop-alt.png",
    alt: "Detail-focused grooming tools on a counter",
  },
  {
    title: "A Name With Energy",
    text:
      "When it was time to open his own space, Zee chose Aura Cuts—a name that captured the feeling you carry when you step back into the world after a great cut. Not just sharp, but renewed—confident.",
    image: "/images/other/barbershop.png",
    alt: "Barbershop interior with modern styling",
  },
  {
    title: "More Than A Chair",
    text:
      "Aura Cuts became a space for conversations, milestones, and the everyday rituals that make us feel like our best selves. From first fades to fresh starts—every visit is part of the story.",
    image: "/images/other/groom-room.png",
    alt: "Grooming room with a calm, refined vibe",
  },
];

export const OurStoryPage = () => {
  const { openBooking } = useBooking();
  return (
    <Layout>
      <main className="bg-black text-white">
        {/* Intro / Main focus */}
        <section className="px-6 md:px-10 lg:px-24 pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-[var(--secondary-color)] mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-white/90 text-lg md:text-xl max-w-3xl"
            >
              Meet Zee—founder of Aura Cuts, a barber who believes a great cut does more than change your look—it changes your energy. This is the story of how a single chair became a destination.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-10 md:mt-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary-color)] mb-3">
                  How Zee Started
                </h2>
                <p className="text-white/90 leading-relaxed mb-4">
                  Before Aura Cuts had a name, Zee had a vision: to build a shop where craft meets care. He started small—late nights practicing blends and lineups, early mornings sweeping floors and greeting the first clients of the day. Every person who sat in his chair left with more than a clean cut—they left with confidence.
                </p>
                <p className="text-white/80 leading-relaxed">
                  That spirit lives on LaGrange Road today. Aura Cuts is the home for precision fades, sharp beards, and a welcoming vibe. Zee’s focus has never changed: listen first, cut with intention, and make sure you walk out feeling your best.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <div className="overflow-hidden rounded-none md:rounded-2xl border border-white/10 md:border-[var(--secondary-color)]">
                  <img
                    src="/images/other/barber-1.png"
                    alt="Zee at work in the shop"
                    className="w-full h-64 md:h-[420px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Picture book style timeline */}
        <section className="px-6 md:px-10 lg:px-24 py-12 md:py-16 md:border-t md:border-white/10">
          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            {blocks.map((b, idx) => (
              <StoryBlock key={b.title} block={b} reverse={idx % 2 === 1} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 lg:px-24 py-16 md:py-20 md:border-t md:border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[var(--secondary-color)]/10 border border-[var(--secondary-color)] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-color)] mb-4">
                Ready for a fresh look?
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Book your appointment now and experience Aura Cuts.
              </p>
              <a
                href="#"
                onClick={openBooking}
                className="inline-flex items-center justify-center border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] px-6 py-3 rounded-lg font-bold tracking-wide transition-colors duration-200 bg-black hover:bg-[var(--secondary-color)] hover:text-black focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

function StoryBlock({ block, reverse }: { block: Block; reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
      }`}
    >
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--secondary-color)] mb-3">{block.title}</h3>
        <p className="text-white/90 leading-relaxed">{block.text}</p>
      </div>
      <div>
        <div className="overflow-hidden rounded-none md:rounded-2xl border border-white/10 md:border-[var(--secondary-color)]">
          <img src={block.image} alt={block.alt} className="w-full h-56 md:h-80 object-cover" />
        </div>
      </div>
    </motion.div>
  );
}