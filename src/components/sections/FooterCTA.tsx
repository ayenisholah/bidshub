"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { GradientText } from "@/components/ui/GradientText";
import { DISCORD_URL, NAV_LINKS } from "@/lib/content";

export function FooterCTA() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Closing CTA section */}
      <section
        className="relative py-36 px-4 sm:px-6 text-center overflow-hidden bg-bg-surface"
        aria-label="Call to action"
      >
        {/* Ambient glow */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/5 to-transparent" />
          <motion.div
            animate={reduced ? {} : { scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-accent-violet/8 blur-[120px]"
          />
        </div>

        <ScrollReveal className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-5">
            Join BidsHub
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
            Join BidsHub before{" "}
            <GradientText>public launch</GradientText>{" "}
            pricing goes live.
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            BidsHub — your tool for passive income. Early subscribers keep their
            current rate for as long as they stay subscribed.
          </p>
          <DiscordButton variant="primary" className="text-base px-10 py-4 gap-2">
            Join BidsHub on Discord
            <ArrowRight size={16} aria-hidden="true" />
          </DiscordButton>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Brand */}
            <div>
              <p className="text-xl font-bold font-display mb-1">
                <GradientText>BidsHub</GradientText>
              </p>
              <p className="text-xs text-text-muted">
                Your tool for passive income.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Discord link */}
            <Link
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-violet-light hover:text-accent-violet transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet rounded"
            >
              Discord Community
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-border-subtle flex justify-end">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} BidsHub
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
