import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "../data";
import { scrollToId } from "../lib/scroll";

function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = [...navigation.map((n) => n.id), "hero", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  // Over the dark hero and contact sections the bar stays dark; elsewhere it turns light.
  const onDark = !scrolled || active === "hero" || active === "contact" || active === null;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled
            ? onDark
              ? "bg-ink/80 backdrop-blur-md border-b border-white/5"
              : "bg-paper/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-8"
          aria-label="Main"
        >
          <button
            type="button"
            onClick={() => go("top")}
            className={`wide text-[0.95rem] font-extrabold tracking-tight transition-colors duration-500 ${
              onDark ? "text-white" : "text-ink"
            }`}
          >
            Naveen Kumar
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  onDark
                    ? "text-white/70 hover:text-white"
                    : "text-slate hover:text-ink"
                } ${active === item.id ? (onDark ? "!text-white" : "!text-ink") : ""}`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${
                      onDark ? "bg-white/10" : "bg-ink/[0.06]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go("contact")}
              className="ml-3 rounded-full bg-cobalt px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cobalt-deep"
            >
              Start a project
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`relative -mr-2 flex h-10 w-10 items-center justify-center md:hidden ${
              onDark || open ? "text-white" : "text-ink"
            }`}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-0 -z-10 bg-ink px-4 pb-10 pt-24 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          >
            <ul className="space-y-1">
              {[...navigation, { name: "Contact", id: "contact" }].map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="wide block w-full py-2 text-left text-3xl font-extrabold text-white"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
