"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

const features = [
  {
    title: "Aaron, 25, Law Student",
    description:
      "“RiseMat makes waking up intentional. It’s the only tool that actually nudged me into building consistency with my morning routine.”",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 17l8 4 8-4" />
        <path d="M4 12l8 4 8-4" />
      </svg>
    ),
  },
  {
    title: "Eric, 43, CEO",
    description:
      "“The mat is the accountability partner I didn’t know I needed. It keeps me true to my routine even with my insane schedule.”",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 22V12h6v10" />
        <path d="M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
      </svg>
    ),
  },
  {
    title: "Sandy, 36, Senior SWE",
    description:
      "“I’ve tried every productivity hack. RiseMat is the first thing that helped me get out of bed consistently and effectively, fixing my poor sleep habits.”",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M9 20h6" />
        <path d="M8 12h8" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6h0a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3" />
        <path d="M6 18v-7a3 3 0 0 1 3-3h7" />
        <circle cx="8" cy="12" r="1" />
        <circle cx="16" cy="12" r="1" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const scrollToForm = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const section = document.getElementById("early-access-form");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const teamMembers = [
  { name: "Daisy Penney", role: "Chief Executive Officer", image: "/images/daisy-penney.jpg" },
  { name: "Kyle Chen", role: "Chief Financial Officer", image: "/images/kyle-chen.jpg" },
  { name: "Lauren Lew", role: "Chief Operations Officer", image: "/images/lauren-lew.jpg" },
  { name: "Gavin Han", role: "Chief Product Officer", image: "/images/gavin-han.jpg" },
  { name: "Erin Maeng", role: "Chief Marketing Officer", image: "/images/erin-maeng.jpg" },
  { name: "Atharv Attri", role: "Chief Technology Officer", image: "/images/atharv-attri.jpg" },
  { name: "Rohan Sastry", role: "Chief Information Officer", image: "/images/rohan-sastry.jpg" },
  { name: "Jaiman Gupta", role: "Chief Strategy Officer", image: "/images/jaiman-gupta.jpg" },
  { name: "Thea Le", role: "Chief Human Resources Officer", image: "/images/thea-le.jpg" },
];

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [copyToast, setCopyToast] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    formRef.current?.reset();
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-dotted-grid flex min-h-screen flex-col text-black">
      <header className="glass-panel sticky top-0 z-20 flex items-center justify-between border-b border-white/30 px-6 py-4 text-black/80 shadow-sm">
        <Link href="/" className="text-2xl font-medium text-black playfair">
          RiseWell
        </Link>
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          <button
            onClick={() => scrollToSection("our-product")}
            className="text-base font-medium text-black/80 transition-colors hover:text-black underline"
          >
            Our Product
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-base font-medium text-black/80 transition-colors hover:text-black underline"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("meet-our-team")}
            className="text-base font-medium text-black/80 transition-colors hover:text-black underline"
          >
            Meet Our Team
          </button>
        </nav>
        <Link
          href="#early-access-form"
          onClick={scrollToForm}
          className="inline-flex h-9 items-center justify-center rounded-md bg-black/90 px-4 text-xs font-medium uppercase tracking-wide text-white transition hover:bg-black"
        >
          Reserve Now
        </Link>
      </header>

      <main className="relative z-10 flex-grow">
        <section className="relative px-6 py-20 text-center text-white">
          <div className="hero-glow" aria-hidden="true" />
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-8 flex max-w-[500px] items-center justify-center">
        <Image
                src="/images/risewell-logo.png"
                alt="RiseWell logo"
                width={400}
                height={300}
          priority
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            <div className="glimmer-pill inline-flex items-center px-6 py-2 text-base font-medium text-white">
              The Smart Mat That Gets You Out of Bed
            </div>

            <h1 className="playfair mb-6 mt-8 text-4xl font-medium tracking-tight text-white drop-shadow md:text-5xl">
              Unique Wake-Up Solution Designed For Self-Improvement
          </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white drop-shadow">
              RiseWell is the first step in your personal growth journey.
            </p>

            <Link
              href="#early-access-form"
              onClick={scrollToForm}
              className="btn-primary"
            >
              Get Early Access
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="scroll-animation text-center text-white">
              <h2 className="playfair mb-3 text-3xl text-white drop-shadow font-semibold md:text-4xl">
                Rise Well, Live Well
              </h2>
              <p className="text-lg text-white drop-shadow">
                Check out what users are saying about RiseMat.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`scroll-animation scroll-delay-${index + 1} group rounded-2xl border border-neutral-200/50 bg-white/90 p-8 shadow-sm backdrop-blur`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 transition-colors group-hover:bg-green-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="playfair mb-3 text-xl font-medium text-black group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-product" className="border-t border-white/20 bg-white/95 px-6 py-20 text-black">
          <div className="mx-auto max-w-[1200px] space-y-12">
            <div className="text-center">
              <h2 className="playfair mb-3 text-3xl font-semibold text-black md:text-4xl">
                Our Product
              </h2>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="about-card">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  More Than Just A Mat
                </p>
                <h3 className="mb-4 text-3xl font-semibold text-black">
                  Data tracking integrated smart mat
                </h3>
                <p className="text-neutral-600">
                  RiseMat captures weight fluctuations, sleep duration, wake-up response time, and habit patterns. Users can access historical data, trends, insights, and streaks related to personal goals and lifestyle changes.
                </p>
              </div>
              <div className="about-media product-media-one" aria-hidden="true" />
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="about-media product-media-two md:order-1 order-2" aria-hidden="true" />
              <div className="about-card md:order-2 order-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Designed for personal improvement
                </p>
                <h3 className="mb-4 text-3xl font-semibold text-black">
                  Building better wake-up behaviors
                </h3>
                <p className="text-neutral-600">
                  By connecting the RiseMat to our app, personalized data analysis are provided to users to display their progress. Connectivity to other smart home devices allows for a truly unique, ultra effective wake-up experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="border-t border-white/20 bg-white/95 px-6 py-20 text-black">
          <div className="mx-auto max-w-[1200px] space-y-12">
            <div className="text-center">
              <h2 className="playfair mb-3 text-3xl font-semibold text-black md:text-4xl">
                About Us
              </h2>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="about-card">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Our Vision
                </p>
                <h3 className="mb-4 text-3xl font-semibold text-black">
                  Driving lasting wellness habits through active engagement
                </h3>
                <p className="text-neutral-600">
                  RiseWell aims to become the indispensible platform for personal wellbeing by strategically delivering core features that drive sustained user interaction and deliver measurable value, maximizing market adoption.
                </p>
              </div>
              <div className="about-media about-media-one" aria-hidden="true" />
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="about-media about-media-two md:order-1 order-2" aria-hidden="true" />
              <div className="about-card md:order-2 order-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Our Mission
                </p>
                <h3 className="mb-4 text-3xl font-semibold text-black">
                  Empowering users to unlock their full potential, one morning at a time
                </h3>
                <p className="text-neutral-600">
                  By transforming the way users wake up, we enable them to start each day with purpose. Over time, these simple morning wins compound into stronger wellness, improved productivity, and a deeper sense of personal growth.
          </p>
        </div>
            </div>
          </div>
        </section>

        <section id="meet-our-team" className="border-t border-white/20 bg-white px-6 py-20 text-black">
          <div className="mx-auto max-w-[1200px] space-y-12">
            <div className="text-center">
              <h2 className="playfair mb-3 text-3xl font-semibold text-black md:text-4xl">
                Meet Our Team
              </h2>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.name} className="team-card">
                  <div
                    className="team-avatar"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="team-info">
                    <p className="team-name">{member.name}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="early-access-form"
          className="border-t border-white/10 bg-white/80 px-6 py-20 text-black"
        >
          <div className="mx-auto max-w-[1200px] text-center">
            <div className="scroll-animation">
              <h2 className="playfair mb-4 text-3xl text-black md:text-4xl">
                Early Access to RiseMat
              </h2>
              <p className="mb-10 text-neutral-600">
                Be the first to step into your full potential.
              </p>
            </div>

            <div className="scroll-animation mx-auto max-w-[420px] rounded-2xl border border-neutral-200 bg-white/95 p-8 shadow-sm backdrop-blur">
              <form className="space-y-6" onSubmit={handleFormSubmit} ref={formRef}>
                <div className="text-left space-y-2">
                  <label className="block text-sm font-medium text-black">
                    Name <span className="text-red-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black shadow-sm placeholder:text-neutral-400 focus:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div className="text-left space-y-2">
                  <label className="block text-sm font-medium text-black">
                    Email address <span className="text-red-500">(required)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@risewell.com"
                    required
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black shadow-sm placeholder:text-neutral-400 focus:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div className="text-left space-y-2">
                  <label className="block text-sm font-medium text-black">Phone number</label>
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-black shadow-sm placeholder:text-neutral-400 focus:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium text-black">
                    What do you hope to gain through RiseMat?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your thoughts..."
                    className="w-full resize-none rounded-lg border border-neutral-200 px-4 py-3 text-black shadow-sm placeholder:text-neutral-400 focus:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass-panel border-t border-white/30 px-6 py-8 text-black/80">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} RiseWell LLC. All rights reserved.</div>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
            target="_blank"
            rel="noopener noreferrer"
                className="text-neutral-600 transition-colors hover:text-black"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showToast && (
        <div className="toast">
          <button className="toast-close" onClick={() => setShowToast(false)} aria-label="Close">
            ×
          </button>
          <div className="toast-content">
            <p className="toast-title">
              Thank you for your feedback & information! We will keep you posted on future updates.
            </p>
            <p className="toast-subtitle">Share with a friend to move up the waitlist</p>
            <div className="share-grid">
              {[
                { label: "Copy", icon: "🔗", action: "copy" },
                { label: "Facebook", iconImg: "/images/icon-facebook.svg", href: "https://facebook.com" },
                { label: "Gmail", icon: "✉️", href: "https://mail.google.com" },
                { label: "Instagram", icon: "📷", href: "https://instagram.com" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="share-pill"
                  type="button"
                  onClick={
                    item.action === "copy"
                      ? async () => {
                          try {
                            await navigator.clipboard.writeText(window.location.href);
                            setCopyToast(true);
                            setTimeout(() => setCopyToast(false), 3000);
                          } catch (error) {
                            console.error("Clipboard copy failed", error);
                          }
                        }
                      : item.href
                      ? () => window.open(item.href, "_blank", "noopener,noreferrer")
                      : undefined
                  }
                >
                  {item.iconImg ? (
                    <span className="share-icon-img">
                      <Image src={item.iconImg} alt={`${item.label} icon`} width={20} height={20} />
                    </span>
                  ) : (
                    <span>{item.icon}</span>
                  )}
                  <span className="share-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {copyToast && <div className="copy-toast">Link copied to clipboard</div>}
    </div>
  );
}
