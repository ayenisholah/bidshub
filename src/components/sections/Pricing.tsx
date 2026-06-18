"use client";
import { Gauge, Check, Tag, Percent } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { GradientText } from "@/components/ui/GradientText";
import {
  PRICING_TIERS,
  PREPAID_DISCOUNTS,
  ADD_ONS,
  type PricingTier,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const reduced = useReducedMotion();

  return (
    <ScrollReveal delay={index * 0.07}>
      <motion.article
        whileHover={reduced ? {} : { y: -5 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className={cn(
          "glass-card p-6 flex flex-col h-full relative transition-all duration-300",
          tier.popular
            ? "border-accent-violet/60 glow-violet"
            : "hover:border-accent-violet/30 hover:shadow-[0_0_24px_rgba(239,24,96,0.16)]"
        )}
        aria-label={`${tier.name} plan`}
      >
        {tier.popular && (
          <div
            aria-label="Most popular plan"
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold
                       bg-gradient-to-r from-accent-violet to-accent-cyan text-white tracking-wide"
          >
            Most Popular
          </div>
        )}

        {/* Speed badge */}
        <div className="flex items-center gap-2 mb-5">
          <Gauge size={14} className="text-text-muted" aria-hidden="true" />
          <span className="text-xs text-text-muted font-mono">
            {tier.speedBps !== null
              ? `${tier.speedBps} bids / sec`
              : "Custom speed"}
          </span>
        </div>

        <h3 className="text-xl font-bold font-display mb-3">{tier.name}</h3>

        {/* Price */}
        <div className="mb-6">
          {tier.id === "trial" ? (
            <div>
              <span className="text-3xl font-bold font-display tabnum gradient-text">
                Free
              </span>
              <span className="text-text-muted text-sm ml-2 font-mono">
                ({tier.note})
              </span>
            </div>
          ) : tier.id === "custom" ? (
            <span className="text-2xl font-bold font-display text-text-secondary">
              Custom pricing
            </span>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display tabnum gradient-text">
                {tier.price}
              </span>
              <span className="text-text-muted text-sm font-mono">
                {tier.period}
              </span>
            </div>
          )}
        </div>

        {/* Included features */}
        <ul className="flex-1 space-y-2.5 mb-6">
          {tier.features.map((feature) => {
            return (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <Check
                  size={13}
                  className="mt-0.5 shrink-0 text-accent-cyan"
                  aria-hidden="true"
                />
                {feature}
              </li>
            );
          })}
        </ul>

        <DiscordButton
          variant={tier.popular ? "primary" : "outline"}
          className="w-full"
        >
          {tier.ctaLabel}
        </DiscordButton>
      </motion.article>
    </ScrollReveal>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-4 sm:px-6 bg-bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            Subscriptions
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            Choose Your{" "}
            <GradientText>Bidding Speed</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base">
            Choose the plan that fits your bidding volume, strategy, and setup.
            All plans priced in ETH.
          </p>
        </ScrollReveal>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        {/* Prepaid discounts */}
        <ScrollReveal>
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <Percent size={15} className="text-accent-cyan" aria-hidden="true" />
              <h3 className="font-bold font-display">Prepaid Subscription Discounts</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {PREPAID_DISCOUNTS.map((d) => (
                <div
                  key={d.months}
                  className="text-center p-4 rounded-xl border border-border-subtle bg-white/[0.02]"
                >
                  <div className="text-2xl font-bold font-display tabnum gradient-text mb-1">
                    {d.discount}%
                  </div>
                  <div className="text-xs text-text-secondary font-mono">
                    {d.months} month{d.months > 1 ? "s" : ""} upfront
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Add-ons */}
        <ScrollReveal>
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <Tag size={15} className="text-accent-violet-light" aria-hidden="true" />
              <h3 className="font-bold font-display">Add-ons</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {ADD_ONS.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border-subtle bg-white/[0.02]"
                >
                  <div>
                    <p className="font-semibold text-sm">{addon.name}</p>
                    {addon.note && (
                      <p className="text-xs text-text-muted mt-0.5">{addon.note}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-bold tabnum text-accent-cyan font-mono">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
