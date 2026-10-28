import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ as = "div", delay = 0, className, children }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
