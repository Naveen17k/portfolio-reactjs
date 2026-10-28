import { background, profile } from "../data";
import Reveal from "./Reveal";

function List({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate">{title}</h3>
      <ul className="mt-4 space-y-2 text-[0.98rem]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Background() {
  const { experience, education, strengths, focus, skills } = background;

  return (
    <section id="background" className="border-t border-line bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="wide text-4xl font-black tracking-tight sm:text-5xl">
              Background
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              I'm a product-minded full stack engineer with about two years of
              full-time experience shipping production web, mobile and backend
              applications. I own features end to end, lead junior developers
              and manage cloud deployments and releases.
            </p>
            <a
              href={profile.cv}
              download="Naveen Kumar CV.pdf"
              className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-inset ring-ink/20 transition-colors hover:bg-ink hover:text-white"
            >
              Download full CV
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <dl className="divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <div key={e.org} className="py-6">
                  <dt className="text-sm text-slate">Experience</dt>
                  <dd className="semi-wide mt-1 text-xl font-extrabold tracking-tight">
                    {e.title}, {e.org}
                  </dd>
                  <dd className="mt-1 text-ink/75">{e.detail}</dd>
                </div>
              ))}
              <div className="py-6">
                <dt className="text-sm text-slate">Education, {education.years}</dt>
                <dd className="semi-wide mt-1 text-xl font-extrabold tracking-tight">
                  {education.title}
                </dd>
                <dd className="mt-1 text-ink/75">{education.org}</dd>
              </div>
            </dl>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <List title="Strengths" items={strengths} />
              <List title="Engineering focus" items={focus} />
            </div>
          </Reveal>
        </div>

        <Reveal as="dl" className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="bg-white p-6">
              <dt className="text-sm font-semibold text-cobalt">{s.group}</dt>
              <dd className="mt-2 leading-relaxed">{s.items}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
