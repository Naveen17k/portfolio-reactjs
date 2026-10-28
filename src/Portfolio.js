import { useEffect } from "react";
import { LiaLinkedin, LiaTelegram, LiaGithub } from "react-icons/lia";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Process, Services } from "./components/Services";
import Background from "./components/Background";
import Contact from "./Contact";
import { profile } from "./data";
import { startSmoothScroll } from "./lib/scroll";

const social = [
  { name: "LinkedIn", href: profile.linkedin, icon: LiaLinkedin },
  { name: "GitHub", href: profile.github, icon: LiaGithub },
  { name: "Telegram", href: profile.telegram, icon: LiaTelegram },
];

export default function Portfolio() {
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <Background />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-ink text-white/50">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Naveen Kumar</p>
          <ul className="flex gap-5">
            {social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
