import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          "mx-auto max-w-screen-2xl px-6 md:px-10 transition-colors duration-300 " +
          (scrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent")
        }
      >
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className={"font-semibold text-lg tracking-wide " + (scrolled ? "text-black" : "text-white")}>
              Massive Music
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={"text-sm font-medium " + (scrolled ? "text-zinc-800" : "text-white/90")}>Services</a>
            <a href="#work" className={"text-sm font-medium " + (scrolled ? "text-zinc-800" : "text-white/90")}>Work</a>
            <a href="#about" className={"text-sm font-medium " + (scrolled ? "text-zinc-800" : "text-white/90")}>About</a>
            <a href="#contact" className={"text-sm font-medium px-4 py-2 rounded-md border " + (scrolled ? "border-zinc-800 text-zinc-900" : "border-white/60 text-white/90")}>Contact</a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className={"p-2 rounded-md focus:outline-none " + (scrolled ? "text-black" : "text-white")}
            >
              {/* simple hamburger icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className={"px-6 pb-6 " + (scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-black/90")}>
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#services" onClick={() => setOpen(false)} className={scrolled ? "text-zinc-800" : "text-white"}>Services</a>
                <a href="#work" onClick={() => setOpen(false)} className={scrolled ? "text-zinc-800" : "text-white"}>Work</a>
                <a href="#about" onClick={() => setOpen(false)} className={scrolled ? "text-zinc-800" : "text-white"}>About</a>
                <a href="#contact" onClick={() => setOpen(false)} className={"inline-block mt-2 px-4 py-2 rounded-md border " + (scrolled ? "border-zinc-800 text-zinc-900" : "border-white text-white")}>Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}