import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SplitFlap from "./SplitFlap";
import { boardRoles, heroStack, profile } from "../data";
import { scrollToId } from "../lib/scroll";

const BOARD_LENGTH = 12;
const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % boardRoles.length),
      3600
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  const rise = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* Faint stadium floodlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(43,75,238,0.55), rgba(43,75,238,0) 65%)",
        }}
      />

      <div className="mx-auto flex min-h-[100svh] max-w-page flex-col justify-center px-4 pb-16 pt-28 sm:px-8">
        <motion.p
          {...rise(0.1)}
          className="flex items-center gap-2.5 text-sm text-white/70"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for freelance projects
        </motion.p>

        <motion.div
          {...rise(0.2)}
          className="mt-8 w-fit rounded-2xl bg-[#0A1422] p-[var(--cell-gap)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/5"
          style={{
            "--cell-gap": "clamp(3px, 0.5vw, 6px)",
            "--cell-w":
              "min(4.4rem, calc((100vw - 2rem - 13 * clamp(3px, 0.5vw, 6px)) / 12))",
          }}
        >
          <h1 className="flex flex-col gap-[var(--cell-gap)]">
            <SplitFlap text={profile.name} length={BOARD_LENGTH} startDelay={350} />
            <SplitFlap
              text={boardRoles[roleIndex]}
              length={BOARD_LENGTH}
              startDelay={roleIndex === 0 ? 900 : 0}
            />
          </h1>
        </motion.div>

        <motion.p
          {...rise(0.5)}
          className="mt-10 max-w-[34rem] text-lg leading-relaxed text-white/75 sm:text-xl"
        >
          I build web apps, mobile apps and the backends behind them, from the
          first spec to the production release. Most recently, a sports platform
          that runs leagues and tournaments across 28 sports.
        </motion.p>

        <motion.div {...rise(0.65)} className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="rounded-full bg-cobalt px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-cobalt-deep"
          >
            Start a project
          </button>
          <a
            href={profile.cv}
            download="Naveen Kumar CV.pdf"
            className="rounded-full px-7 py-3.5 text-[0.95rem] font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10"
          >
            Download CV
          </a>
        </motion.div>

        <motion.ul
          {...rise(0.8)}
          className="mt-auto flex flex-wrap gap-x-7 gap-y-2 pt-16 text-sm text-white/45"
          aria-label="Core stack"
        >
          {heroStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
