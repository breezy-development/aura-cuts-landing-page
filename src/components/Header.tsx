import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiArrowRight, FiX, FiInstagram } from 'react-icons/fi';
import { FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const LOGO_SRC = '/images/logo/logo-gold-wide.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/story' },
  { name: 'Book Now', href: '#' },
  { name: 'Instagram', href: 'https://www.instagram.com/aura_cuts1/', icon: <FiInstagram size={32} /> },
  { name: 'TikTok', href: 'https://tiktok.com/@zaid_aura', icon: <FaTiktok size={32} /> },
  { name: 'Snapchat', href: 'https://snapchat.com/', icon: <FaSnapchatGhost size={32} /> },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent background scroll when menu is open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-black/90 backdrop-blur-md">
        {/* Left: Empty for spacing */}
        <div className="w-12 h-12" />

        {/* Center: Logo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none"
          onClick={() => navigate('/')}
          aria-label="Go to home page"
        >
          <img src={LOGO_SRC} alt="Aura Cuts Logo" className="h-14 md:h-16 w-auto drop-shadow-lg" />
        </div>

        {/* Right: Nav button */}
        <button
          className="ml-auto z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--secondary-color)] hover:bg-yellow-400 text-black focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={32} />
        </button>
      </header>

      {/* Fullscreen Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-[60]"
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-6 text-[var(--secondary-color)] hover:text-yellow-400 text-4xl focus:outline-none"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>

            <nav className="flex flex-col gap-8 mt-8">
              {navLinks.map((link) => (
                <NavMenuItem key={link.name} link={link} setMenuOpen={setMenuOpen} />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function NavMenuItem({ link, setMenuOpen }: { link: any, setMenuOpen: (open: boolean) => void }) {
  const isExternal = link.href && link.href.startsWith('http');
  const { openBooking } = useBooking();

  const handleClick = (e: React.MouseEvent) => {
    setMenuOpen(false);
    if (link.onClick) {
      e.preventDefault();
      link.onClick();
    }
  };

  const base =
    'flex items-center gap-4 text-[var(--secondary-color)] text-4xl md:text-5xl font-bold tracking-wide px-8 py-4 rounded-lg transition-colors duration-200 cursor-pointer';

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {link.href ? (
        isExternal ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={base + ' group'}
            onClick={handleClick}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.name}
            <motion.span
              className="ml-3"
              variants={{
                rest: { opacity: 0, x: -10 },
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <FiArrowRight />
            </motion.span>
          </a>
        ) : (
          <Link
            to={link.href}
            className={base + ' group'}
            onClick={link.name === 'Book Now' ? openBooking : handleClick}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.name}
            <motion.span
              className="ml-3"
              variants={{
                rest: { opacity: 0, x: -10 },
                hover: { opacity: 1, x: 0 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <FiArrowRight />
            </motion.span>
          </Link>
        )
      ) : (
        <button
          className={base + ' group'}
          onClick={handleClick}
        >
          {link.icon && <span className="mr-2">{link.icon}</span>}
          {link.name}
          <motion.span
            className="ml-3"
            variants={{
              rest: { opacity: 0, x: -10 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <FiArrowRight />
          </motion.span>
        </button>
      )}
    </motion.div>
  );
}