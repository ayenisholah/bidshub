import { TrendingUp, AlertCircle, BadgeCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { GradientText } from "@/components/ui/GradientText";
import { PROFIT_SPLIT } from "@/lib/content";

export function ProfitSharing() {
  return (
    <section id="profit-sharing" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            For High-Volume Traders
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            <GradientText>Profit Sharing Plan</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            For selected high-volume and aggressive bidders, BidsHub may offer a
            Profit Sharing Plan instead of a fixed monthly subscription. No monthly
            payment upfront - we earn only from generated profit.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-card p-8 mb-6">
            <h3 className="font-bold font-display text-lg mb-6">Profit Split</h3>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                <div className="text-5xl font-bold font-display tabnum gradient-text mb-2">
                  {PROFIT_SPLIT.minUser}-{PROFIT_SPLIT.maxUser}%
                </div>
                <div className="text-sm text-text-secondary font-medium">Your share</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-border-subtle">
                <div className="text-5xl font-bold font-display tabnum text-text-muted mb-2">
                  {PROFIT_SPLIT.minBidsHub}-{PROFIT_SPLIT.maxBidsHub}%
                </div>
                <div className="text-sm text-text-muted font-medium">BidsHub share</div>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              The final split depends on:
            </p>
            <ul className="flex flex-wrap gap-2">
              {PROFIT_SPLIT.factors.map((factor) => (
                <li
                  key={factor}
                  className="text-xs px-3 py-1.5 rounded-full border border-border-subtle bg-white/[0.03] text-text-secondary"
                >
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          <ScrollReveal delay={0.05}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={16} className="text-accent-cyan" aria-hidden="true" />
                <h3 className="font-bold font-display">Profit Calculation</h3>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary">
                {[
                  "Profit sharing is calculated per profitable sale",
                  "BidsHub receives its agreed percentage only when a sale generates profit after acquisition cost",
                  "Any abuse, artificial loss, or attempt to bypass the structure may lead to immediate service termination",
                  "Settlements reviewed weekly based on eligible profitable sales",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="text-accent-violet mt-0.5 shrink-0">-&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck size={16} className="text-accent-violet-light" aria-hidden="true" />
                <h3 className="font-bold font-display">Reviewed Case by Case</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                This option is reviewed case by case and is designed for serious
                bidders who want to scale aggressively without paying a fixed monthly
                fee upfront.
              </p>
              <div className="grid gap-3">
                {[
                  "Aggressive bidding setups",
                  "High-volume NFT traders",
                  "Users who want to dominate the bidding market",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border-subtle bg-white/[0.025] px-4 py-3 text-sm text-text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 mb-8">
            <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Profit Sharing Plan applications are reviewed on a case-by-case basis.
              To apply or learn more, open a ticket in our Discord.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center">
          <DiscordButton variant="primary">
            Apply for Profit Sharing Plan
          </DiscordButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
