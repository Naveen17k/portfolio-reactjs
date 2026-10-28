import { motion, useReducedMotion } from "framer-motion";

const teams = ["Finance", "Ops", "Design", "Sales", "Legal", "HR", "Product", "Tech"];

// A knockout bracket that draws itself in, round by round.
export function Bracket() {
  const reduceMotion = useReducedMotion();
  const rowH = 34;
  const colX = [0, 150, 280, 400];
  const boxW = 110;

  const round = (count, x, spacing, offset) =>
    Array.from({ length: count }, (_, i) => ({
      x,
      y: offset + i * spacing,
    }));

  const r1 = round(8, colX[0], rowH + 8, 0);
  const r2 = r1.filter((_, i) => i % 2 === 0).map((_p, i) => ({
    x: colX[1],
    y: (r1[i * 2].y + r1[i * 2 + 1].y) / 2,
  }));
  const r3 = r2.filter((_, i) => i % 2 === 0).map((_p, i) => ({
    x: colX[2],
    y: (r2[i * 2].y + r2[i * 2 + 1].y) / 2,
  }));
  const final = { x: colX[3], y: (r3[0].y + r3[1].y) / 2 };

  const connectors = (from, to, width) =>
    to.map((t, i) => {
      const a = from[i * 2];
      const b = from[i * 2 + 1];
      const midX = a.x + width + (t.x - a.x - width) / 2;
      const ay = a.y + 13;
      const by = b.y + 13;
      const ty = t.y + 13;
      return `M${a.x + width} ${ay} H${midX} V${by} H${b.x + width} M${midX} ${ty} H${t.x}`;
    });

  const paths = [
    ...connectors(r1, r2, boxW).map((d) => ({ d, delay: 0.3 })),
    ...connectors(r2, r3, 90).map((d) => ({ d, delay: 0.8 })),
    ...connectors(r3, [final], 80).map((d) => ({ d, delay: 1.3 })),
  ];

  const draw = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, margin: "-15% 0px" },
          transition: { duration: 0.6, delay, ease: "easeInOut" },
        };

  const appear = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-15% 0px" },
          transition: { duration: 0.4, delay },
        };

  const winners = [teams[1], teams[2], teams[5], teams[7]];
  const semis = [winners[0], winners[3]];

  return (
    <svg
      viewBox="0 0 520 330"
      className="h-auto w-full"
      role="img"
      aria-label="Knockout bracket with eight teams advancing to a final"
    >
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          {...draw(p.delay)}
        />
      ))}
      {r1.map((p, i) => (
        <g key={`r1-${i}`}>
          <rect x={p.x} y={p.y} width={boxW} height="26" rx="5" fill="#1A2940" />
          <text x={p.x + 10} y={p.y + 17.5} fontSize="12" fill="rgba(255,255,255,0.75)">
            {teams[i]}
          </text>
        </g>
      ))}
      {r2.map((p, i) => (
        <motion.g key={`r2-${i}`} {...appear(0.7)}>
          <rect x={p.x} y={p.y} width="90" height="26" rx="5" fill="#1A2940" />
          <text x={p.x + 10} y={p.y + 17.5} fontSize="12" fill="rgba(255,255,255,0.85)">
            {winners[i]}
          </text>
        </motion.g>
      ))}
      {r3.map((p, i) => (
        <motion.g key={`r3-${i}`} {...appear(1.2)}>
          <rect x={p.x} y={p.y} width="80" height="26" rx="5" fill="#1A2940" />
          <text x={p.x + 10} y={p.y + 17.5} fontSize="12" fill="#fff">
            {semis[i]}
          </text>
        </motion.g>
      ))}
      <motion.g {...appear(1.8)}>
        <rect x={final.x} y={final.y - 4} width="110" height="34" rx="6" fill="#F5B83D" />
        <text
          x={final.x + 12}
          y={final.y + 17.5}
          fontSize="13"
          fontWeight="700"
          fill="#0F1B2D"
        >
          {semis[1]} wins
        </text>
      </motion.g>
    </svg>
  );
}

const hourly = [2, 3, 1, 0, 0, 1, 6, 14, 9, 7, 8, 12, 15, 9, 6, 7, 10, 14, 18, 11, 6, 4, 3, 2];

// Hourly step-sync bars with the three health data sources.
export function StepSync() {
  const reduceMotion = useReducedMotion();
  const max = Math.max(...hourly);

  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="flex items-baseline justify-between text-sm text-white/60">
        <span>Steps, synced hourly</span>
        <span className="tabular font-semibold text-white">8,412</span>
      </div>
      <div className="flex h-32 items-end gap-[3px]" aria-hidden="true">
        {hourly.map((v, i) => (
          <motion.span
            key={i}
            className={`flex-1 origin-bottom rounded-sm ${
              i === 18 ? "bg-amber" : "bg-white/25"
            }`}
            style={{ height: `${Math.max(4, (v / max) * 100)}%` }}
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
      <ul className="flex flex-wrap gap-2 text-xs text-white/80">
        {["Apple HealthKit", "Health Connect", "Google Fit"].map((s) => (
          <li key={s} className="rounded-full px-3 py-1 ring-1 ring-inset ring-white/20">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

// A "now serving" queue display.
export function TokenBoard() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <span className="text-sm text-white/60">Now serving</span>
      <span
        className="condensed tabular text-7xl font-extrabold leading-none text-amber sm:text-8xl"
        style={{ textShadow: "0 0 30px rgba(245,184,61,0.3)" }}
      >
        A-042
      </span>
      <div className="flex gap-4 text-sm text-white/50">
        <span>Next: A-043</span>
        <span>A-044</span>
        <span>A-045</span>
      </div>
    </div>
  );
}
