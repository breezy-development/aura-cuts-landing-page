import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { useBooking } from "../context/BookingContext";

const ADDRESS = "14490 LaGrange Rd, Orland Park, IL 60462";
const PHONE_DISPLAY = "(708) 793-3560";
const PHONE_TEL = "+17087933560";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const HOURS: Array<{ day: string; hours: string }> = [
  { day: "Saturday", hours: "9 AM–9 PM" },
  { day: "Sunday", hours: "9 AM–7 PM" },
  { day: "Monday", hours: "9 AM–9 PM" },
  { day: "Tuesday", hours: "9 AM–9 PM" },
  { day: "Wednesday", hours: "9 AM–9 PM" },
  { day: "Thursday", hours: "9 AM–9 PM" },
  { day: "Friday", hours: "9 AM–9 PM" },
];

export const Footer = () => {
  const { openBooking, isLoaded } = useBooking();

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16 grid gap-10 md:gap-12 md:grid-cols-3">
        {/* CTA */}
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-color)] mb-4">
            Ready for a fresh look?
          </h3>
          <p className="text-white/85 mb-6">
            Book your appointment now and experience Aura Cuts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 0 2px var(--secondary-color)" }}
            whileTap={{ scale: 0.98 }}
            onClick={openBooking}
            disabled={!isLoaded}
            className="inline-flex items-center justify-center border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] px-6 py-3 rounded-lg font-bold tracking-wide transition-colors duration-200 bg-black hover:bg-[var(--secondary-color)] hover:text-black focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] disabled:opacity-60 disabled:cursor-not-allowed"
            aria-disabled={!isLoaded}
          >
            {isLoaded ? "Book Now" : "Loading booking…"}
          </motion.button>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="text-2xl font-bold text-[var(--secondary-color)] mb-3">Visit Us</h4>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-white/90 hover:text-[var(--secondary-color)] transition-colors mb-4"
          >
            <FiMapPin className="mt-1 shrink-0" />
            <span>{ADDRESS}</span>
          </a>

          <h4 className="text-2xl font-bold text-[var(--secondary-color)] mb-3">Call Us</h4>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 text-white/90 hover:text-[var(--secondary-color)] transition-colors"
          >
            <FiPhone />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-2xl font-bold text-[var(--secondary-color)] mb-3 flex items-center gap-2">
            <FiClock /> Hours
          </h4>
          <ul className="space-y-1 text-white/90">
            {HOURS.map(({ day, hours }) => (
              <li key={day} className="flex justify-between gap-4">
                <span>{day}</span>
                <span className="text-white/80">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Aura Cuts. All rights reserved.</span>
          <span className="text-white/50">Orland Park, IL</span>
        </div>
      </div>
    </footer>
  );
}