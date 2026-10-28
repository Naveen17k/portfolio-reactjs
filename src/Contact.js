import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "./data";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "block w-full rounded-xl border-0 bg-white/[0.06] px-4 py-3 text-white ring-1 ring-inset ring-white/10 placeholder:text-white/35 transition focus:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cobalt";

function Field({ label, id, className, children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-white/70">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_4kv10yr",
        "template_x869y74",
        e.target,
        "1X6X64NhQgLQt9KT_"
      )
      .then(
        () => {
          setFormData(emptyForm);
          setStatus("sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  const direct = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    { label: "LinkedIn", value: "Naveen Kumar", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[34rem] w-[34rem] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(43,75,238,0.6), rgba(43,75,238,0) 65%)",
        }}
      />
      <div className="mx-auto grid max-w-page gap-16 px-4 py-24 sm:px-8 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="wide text-4xl font-black tracking-tight sm:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Tell me what you're building and where you're stuck. I'll reply
            within a day with questions, a rough plan or an estimate.
          </p>

          <dl className="mt-12 space-y-5">
            {direct.map((d) => (
              <div key={d.label}>
                <dt className="text-sm text-white/50">{d.label}</dt>
                <dd className="mt-0.5">
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="semi-wide text-lg font-bold text-white transition-colors hover:text-amber"
                  >
                    {d.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={submitHandler}
          className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-10 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Name" id="name">
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClass}
              />
            </Field>
            <Field label="Email" id="email">
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass}
              />
            </Field>
            <Field label="What do you need?" id="subject" className="sm:col-span-2">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="A web app, a mobile app, an API..."
                value={formData.subject}
                onChange={handleInputChange}
                className={inputClass}
              />
            </Field>
            <Field label="Project details" id="message" className="sm:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What it should do, who it's for, and your timeline"
                value={formData.message}
                onChange={handleInputChange}
                className={`${inputClass} resize-y`}
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-cobalt px-8 py-3.5 font-semibold text-white transition-colors hover:bg-cobalt-deep disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <AnimatePresence mode="wait">
              {(status === "sent" || status === "error") && (
                <motion.p
                  key={status}
                  role="status"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`text-sm ${status === "sent" ? "text-emerald-300" : "text-amber"}`}
                >
                  {status === "sent" ? (
                    "Message sent. I'll get back to you within a day."
                  ) : (
                    <>
                      The message didn't send. Email me at{" "}
                      <a className="underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                      .
                    </>
                  )}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}
