"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useInView } from "motion/react";
import { GradientText } from "@/components/ui/GradientText";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { useCountUp } from "@/hooks/useCountUp";
import { HERO_STATS, type HeroStat } from "@/lib/content";

function CounterStat({ stat }: { stat: Extract<HeroStat, { type: "counter" }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, 1400, inView);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-3xl sm:text-4xl font-bold font-display tabnum gradient-text">
        {count}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm text-text-secondary mt-1.5 font-medium">
        {stat.label}
      </div>
    </div>
  );
}

function TextStat({ stat }: { stat: Extract<HeroStat, { type: "text" }> }) {
  return (
    <div className="text-center px-4">
      <div className="text-xl sm:text-2xl font-bold font-display gradient-text">
        {stat.display}
      </div>
      <div className="text-xs sm:text-sm text-text-secondary mt-1.5 font-medium">
        {stat.label}
      </div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.13, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.65, ease: "easeOut" as const },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 text-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={
            reduced
              ? {}
              : { x: [0, 40, -25, 0], y: [0, -25, 35, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] rounded-full bg-accent-violet/15 blur-[120px]"
        />
        <motion.div
          animate={
            reduced
              ? {}
              : { x: [0, -35, 20, 0], y: [0, 25, -35, 0] }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-cyan/12 blur-[120px]"
        />
        <motion.div
          animate={
            reduced
              ? {}
              : { x: [0, 20, -40, 0], y: [0, 40, -20, 0] }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          className="absolute bottom-1/4 left-1/2 w-[20rem] h-[20rem] rounded-full bg-accent-magenta/10 blur-[100px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl w-full"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <Image
            src="/logo.webp"
            alt="BidsHub"
            width={168}
            height={168}
            priority
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-3xl object-cover shadow-[0_0_48px_rgba(239,24,96,0.28)]"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-accent-violet-light text-xs font-semibold uppercase tracking-[0.2em] mb-5 font-display"
        >
          NFT Bidding Bot & API Platform
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-display leading-[1.07] tracking-tight mb-6"
        >
          High-Speed{" "}
          <GradientText>Automated</GradientText>
          <br />
          NFT Bidding
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-text-secondary font-display mb-3 font-medium"
        >
          Your tool for passive income.
        </motion.p>

        <motion.p
          variants={item}
          className="text-base text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Welcome to BidsHub. Built for speed, automation, and serious NFT
          trading — from 1 bid per second to hundreds of bids per second. Includes
          custom analyzer tools, guides, and resources to help you trade faster
          and smarter.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <DiscordButton variant="primary" className="text-base px-8 py-4">
            Join BidsHub on Discord
          </DiscordButton>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base
                       border border-white/15 text-text-secondary hover:text-text-primary
                       hover:border-white/30 transition-all duration-200
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
          >
            Explore Products
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div variants={item}>
          <div className="glass-card px-4 sm:px-10 py-7 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
            {HERO_STATS.map((stat) =>
              stat.type === "counter" ? (
                <CounterStat key={stat.label} stat={stat} />
              ) : (
                <TextStat key={stat.label} stat={stat} />
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
