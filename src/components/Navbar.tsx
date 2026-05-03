import { Link, useLocation } from "react-router-dom";
import { Music, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hem", path: "/" },
    { name: "Spelböcker", path: "/bocker" },
    { name: "Om Trumboken", path: "/om-trumboken" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group">
            <span className={`font-display text-2xl font-black italic tracking-tighter ${scrolled ? "text-neutral-900" : "text-neutral-900"}`}>
              TRUMBOKEN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  location.pathname === link.path ? "text-brand" : "text-neutral-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://notposten.se/search?q=trumboken"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20"
            >
              Köp nu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path ? "text-brand" : "text-neutral-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://notposten.se/search?q=trumboken"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block bg-brand text-white px-5 py-3 rounded-xl text-center font-semibold"
              >
                Köp nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
