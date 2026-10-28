import { projects } from "../data";
import Reveal from "./Reveal";
import { Bracket, StepSync, TokenBoard } from "./Illustrations";

function Stack({ items, dark }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-label="Tech stack">
      {items.map((t) => (
        <li key={t} className={dark ? "text-white/55" : "text-slate"}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ href, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 font-semibold text-cobalt"
    >
      <span className="border-b-2 border-cobalt/25 pb-0.5 transition-colors group-hover:border-cobalt">
        {label}
      </span>
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        <path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </a>
  );
}

export default function Work() {
  const [flagship, health, token] = projects;

  return (
    <section id="work" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="wide text-4xl font-black tracking-tight sm:text-6xl">
            Selected work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Products I have designed, built and shipped to real users.
          </p>
        </Reveal>

        {/* Flagship case study */}
        <Reveal as="article" className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-cobalt">{flagship.kind}</p>
            <h3 className="semi-wide mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {flagship.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{flagship.summary}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {flagship.facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="wide tabular text-4xl font-black tracking-tight sm:text-5xl">
                    {f.value}
                  </dd>
                  <dd className="mt-1 text-sm text-slate">{f.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 space-y-3 text-[0.98rem] leading-relaxed text-ink/80">
              {flagship.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 flex-none rounded-full bg-cobalt" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-6">
              <Stack items={flagship.stack} />
              <ProjectLink href={flagship.href} label={flagship.linkLabel} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-ink p-6 sm:p-10">
              <div className="flex flex-1 items-center">
                <Bracket />
              </div>
              <div>
                <p className="text-sm text-white/60">Competition formats supported</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {flagship.formats.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-24 grid gap-14 md:grid-cols-2 md:gap-10">
          {[
            { project: health, visual: <StepSync /> },
            { project: token, visual: <TokenBoard /> },
          ].map(({ project, visual }, i) => (
            <Reveal as="article" key={project.id} delay={i * 0.1} className="flex flex-col">
              <div className="h-64 rounded-3xl bg-ink p-6 sm:h-72 sm:p-8">{visual}</div>
              <p className="mt-8 text-sm font-medium text-cobalt">{project.kind}</p>
              <h3 className="semi-wide mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/80">{project.summary}</p>
              {project.points && (
                <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-ink/75">
                  {project.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-cobalt" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto space-y-5 pt-6">
                <Stack items={project.stack} />
                <ProjectLink href={project.href} label={project.linkLabel} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
