import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+./-";
const STEP_MS = 38;

function FlapCell({ target, delay, instant }) {
  const [char, setChar] = useState(instant ? target : " ");
  const charRef = useRef(char);

  useEffect(() => {
    if (instant) {
      charRef.current = target;
      setChar(target);
      return;
    }

    let timer;
    const step = () => {
      const current = charRef.current;
      if (current === target) return;
      const idx = CHARS.indexOf(current);
      const next = CHARS[(idx + 1) % CHARS.length];
      charRef.current = next;
      setChar(next);
      timer = setTimeout(step, STEP_MS);
    };
    timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [target, delay, instant]);

  return (
    <span className="flap-cell" data-blank={char === " "} aria-hidden="true">
      <span key={char} className="flap-char">
        {char === " " ? "·" : char}
      </span>
    </span>
  );
}

export default function SplitFlap({ text, length, startDelay = 0 }) {
  const reduceMotion = useReducedMotion();
  const padded = text.toUpperCase().padEnd(length, " ").slice(0, length);

  return (
    <span className="flex gap-[var(--cell-gap)]">
      <span className="sr-only">{text}</span>
      {padded.split("").map((ch, i) => (
        <FlapCell
          key={i}
          target={CHARS.includes(ch) ? ch : " "}
          delay={startDelay + i * 45}
          instant={reduceMotion}
        />
      ))}
    </span>
  );
}
