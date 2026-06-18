import { TrendingUp, AlertCircle, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { DiscordPill } from "@/components/ui/DiscordPill";
import { GradientText } from "@/components/ui/GradientText";
import { PROFIT_SPLIT } from "@/lib/content";

export function ProfitSharing() {
  return (
    <section id="profit-sharing" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            For High-Volume Traders
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            <GradientText>Profit Sharing</GradientText>{" "}
            Plan
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            For selected high-volume and aggressive bidders, BidsHub may offer a
            profit-sharing plan instead of a fixed monthly subscription. No monthly
            payment — we earn only from generated profit.
          </p>
        </ScrollReveal>

        {/* Split range */}
        <ScrollReveal>
          <div className="glass-card p-8 mb-6">
            <h3 className="font-bold font-display text-lg mb-6">Profit Split</h3>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                <div className="text-5xl font-bold font-display tabnum gradient-text mb-2">
                  {PROFIT_SPLIT.minUser}–{PROFIT_SPLIT.maxUser}%
                </div>
                <div className="text-sm text-text-secondary font-medium">Your share</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-border-subtle">
                <div className="text-5xl font-bold font-display tabnum text-text-muted mb-2">
                  {PROFIT_SPLIT.minBidsHub}–{PROFIT_SPLIT.maxBidsHub}%
                </div>
                <div className="text-sm text-text-muted font-medium">BidsHub share</div>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              The final split depends on:
            </p>
            <ul className="flex flex-wrap gap-2">
              {PROFIT_SPLIT.factors.map((f) => (
                <li
                  key={f}
                  className="text-xs px-3 py-1.5 rounded-full border border-border-subtle bg-white/[0.03] text-text-secondary"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {/* Profit calculation */}
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={16} className="text-accent-cyan" aria-hidden="true" />
                <h3 className="font-bold font-display">Profit Calculation</h3>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-2.5">
                  <span className="text-accent-violet mt-0.5 shrink-0">→</span>
                  Profit sharing is calculated per profitable sale
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent-violet mt-0.5 shrink-0">→</span>
                  BidsHub receives its agreed percentage only when a sale generates
                  profit after acquisition cost
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent-violet mt-0.5 shrink-0">→</span>
                  Any abuse, artificial loss, or attempt to bypass the structure may
                  lead to immediate service termination
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent-violet mt-0.5 shrink-0">→</span>
                  Settlements reviewed weekly based on eligible profitable sales
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Who is this for */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-accent-violet-light" aria-hidden="true" />
                <h3 className="font-bold font-display">Who Is This For?</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                This option is reviewed case by case and is designed for serious
                bidders who want to scale aggressively without paying a fixed monthly
                fee upfront.
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-2.5">
                  <span className="text-accent-cyan mt-0.5 shrink-0">→</span>
                  High-volume and aggressive bidders
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent-cyan mt-0.5 shrink-0">→</span>
                  Serious traders who prefer no monthly cost upfront
                </li>
                <li className="flex gap-2.5">
                  <span className="text-accent-cyan mt-0.5 shrink-0">→</span>
                  Apply via ticket — reviewed manually
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Warning */}
        <ScrollReveal>
          <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 mb-8">
            <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Profit Sharing plans are reviewed on a case-by-case basis. To apply or
              learn more, open a ticket in{" "}
              <DiscordPill label="#create-a-ticket" />.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center">
          <DiscordButton variant="primary">
            Apply for Profit Sharing
          </DiscordButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
