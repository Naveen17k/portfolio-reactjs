export const profile = {
  name: "Naveen Kumar",
  role: "Full Stack Engineer",
  email: "naveenkumarv1703@gmail.com",
  phone: "+91 90258 15720",
  phoneHref: "tel:+919025815720",
  cv: "/Naveen Kumar CV.pdf",
  linkedin: "https://www.linkedin.com/in/naveen-kumar-87997a198/",
  github: "https://github.com/Naveen17k",
  telegram: "https://t.me/Naveen1110k",
};

// Rows cycled on the hero scoreboard. Keep each entry at 12 characters or fewer.
export const boardRoles = [
  "FULL STACK",
  "NEXT.JS WEB",
  "NESTJS APIS",
  "FLUTTER APPS",
  "GCP + CI/CD",
];

export const navigation = [
  { name: "Work", id: "work" },
  { name: "Services", id: "services" },
  { name: "Process", id: "process" },
  { name: "Background", id: "background" },
];

export const heroStack = ["Next.js", "NestJS", "Flutter", "MySQL", "Google Cloud"];

export const projects = [
  {
    id: "csc",
    title: "Corporate Sports Club",
    kind: "Sports management platform",
    href: "https://corporatesportsclub.in/",
    linkLabel: "Visit corporatesportsclub.in",
    summary:
      "A platform that runs corporate sports events end to end: registrations, fixtures, live results and standings across web and mobile.",
    facts: [
      { value: "28", label: "sports supported" },
      { value: "6+", label: "competition formats" },
      { value: "3", label: "developers led" },
    ],
    points: [
      "Owned product development across web, mobile and backend, turning product requirements into a scalable system.",
      "Designed the core competition workflows, from league tables to knockout brackets, heats and attempt-based events.",
      "Led three junior developers through sprint planning, code reviews and delivery.",
      "Designed the product UI/UX and ran GCP deployments, CI/CD and production releases.",
    ],
    formats: [
      "League",
      "Knockout",
      "League + knockout",
      "Round robin",
      "Time trial",
      "Heats",
      "Attempt-based",
    ],
    stack: ["Next.js", "NestJS", "Flutter", "MySQL", "Google Cloud"],
  },
  {
    id: "health",
    title: "Fitness & Health Data Platform",
    kind: "Health-data integrations",
    summary:
      "Step tracking that pulls from every major phone health store and feeds live walkathon leaderboards.",
    points: [
      "Built cross-platform integrations with Apple HealthKit, Android Health Connect and Google Fit.",
      "Implemented automated hourly sync with controlled source handling, powering walkathon leaderboards and three challenge modes.",
      "Refactored the existing implementation for cleaner, more consistent and maintainable code.",
    ],
    stack: ["Flutter", "NestJS", "MySQL", "HealthKit", "Health Connect", "Google Fit"],
  },
  {
    id: "token",
    title: "Hospital Token Management",
    kind: "Side project",
    href: "https://github.com/Naveen17k/hospital-token-management-system",
    linkLabel: "View source on GitHub",
    summary:
      "Patients register for a token through a simple form, and the queue display updates in real time as they are served.",
    stack: ["Next.js", "Express", "MongoDB", "Socket.IO"],
  },
];

export const services = [
  {
    title: "Web applications",
    body: "Dashboards, booking systems, admin panels and customer-facing products that are fast and easy to maintain.",
    stack: "Next.js, React, Tailwind CSS",
  },
  {
    title: "Mobile apps",
    body: "One Flutter codebase for iOS and Android, including device integrations like Apple Health and Google Fit.",
    stack: "Flutter",
  },
  {
    title: "APIs and backends",
    body: "Well-structured REST APIs, database design and the business logic your product depends on.",
    stack: "NestJS, Node.js, Express, MySQL, MongoDB",
  },
  {
    title: "Cloud and releases",
    body: "Deployments on Google Cloud with CI/CD pipelines, so shipping updates is routine instead of risky.",
    stack: "GCP, Cloud Run, App Engine, GitHub Actions",
  },
];

export const process = [
  {
    title: "Scope",
    body: "We turn your idea into a clear feature list, timeline and estimate before any code is written.",
  },
  {
    title: "Design",
    body: "I plan the screens, data model and APIs so the product holds up as it grows.",
  },
  {
    title: "Build",
    body: "Work ships in short cycles. You see progress on a live preview every week.",
  },
  {
    title: "Launch and support",
    body: "I deploy to production with CI/CD, monitor the release and stay on hand for fixes and new features.",
  },
];

export const background = {
  experience: [
    {
      title: "Full Stack Developer",
      org: "Corporate Sports Club",
      detail:
        "About two years full time, owning product across web, mobile and backend.",
    },
  ],
  education: {
    title: "BE in Computer Science",
    org: "Global Institute of Engineering and Technology, Anna University",
    years: "2020 – 2024",
  },
  strengths: [
    "Product ownership",
    "Technical decision making",
    "Team leadership",
    "Problem solving",
    "Cross-functional collaboration",
  ],
  focus: [
    "System design and architecture",
    "API design and integration",
    "Database design and optimization",
    "Cloud deployment and CI/CD",
    "Production debugging and optimization",
  ],
  skills: [
    { group: "Frontend", items: "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS" },
    { group: "Mobile", items: "Flutter" },
    { group: "Backend", items: "Node.js, NestJS, Express.js, REST APIs" },
    { group: "Database", items: "MySQL, MongoDB" },
    { group: "Cloud", items: "GCP, Cloud Run, App Engine" },
    { group: "DevOps", items: "GitHub Actions, CI/CD, deployments, instance management" },
  ],
};
