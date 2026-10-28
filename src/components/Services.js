import { process, services } from "../data";
import Reveal from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-line bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-page gap-12 px-4 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="wide text-4xl font-black tracking-tight sm:text-5xl lg:max-w-md">
            What I can build for you
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate">
            One developer for the whole product, so nothing gets lost between
            the app, the API and the server.
          </p>
        </Reveal>

        <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 2) * 0.08}
              className="group border-t border-line py-8"
            >
              <h3 className="semi-wide text-xl font-extrabold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
              <p className="mt-4 text-sm text-cobalt">{s.stack}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="wide text-4xl font-black tracking-tight sm:text-5xl">
            How a project runs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            The same way I ran sprints for a product team: clear scope, steady
            progress you can see, and a careful release.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.12} className="relative">
              {i < process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-12 right-[-1rem] top-5 hidden h-px bg-line md:block"
                />
              )}
              <span className="wide tabular relative flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-amber">
                {i + 1}
              </span>
              <h3 className="semi-wide mt-6 text-xl font-extrabold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/75">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
