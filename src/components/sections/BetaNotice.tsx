import { Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";

export function BetaNotice() {
  return (
    <ScrollReveal>
      <div className="relative overflow-hidden border-y border-accent-violet/25 bg-gradient-to-r from-accent-violet/10 via-accent-violet/5 to-accent-cyan/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-9 h-9 rounded-full bg-accent-violet/20 border border-accent-violet/30 flex items-center justify-center mt-0.5">
              <Zap size={16} className="text-accent-violet-light" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-base font-display mb-1">
                Beta — Early-Bird Pricing Active
              </p>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                BidsHub is currently in beta, but our core bidding and counterbidding
                functionality has already been tested for months and is working
                reliably. We are now opening access to early users while we continue
                finalizing additional tools, guides, and upcoming features.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mt-2">
                Beta subscribers get access at <span className="text-accent-violet-light font-semibold">early-bird pricing</span>.
                After the full launch, subscription prices will increase — but early
                subscribers keep their current rate for as long as they stay
                subscribed.{" "}
                <span className="text-text-primary font-medium">
                  This is the best time to join.
                </span>
              </p>
            </div>
          </div>
          <DiscordButton
            variant="primary"
            className="w-full sm:w-auto md:shrink-0 text-sm px-5 py-3 sm:py-2.5"
          >
            Claim Early Access
          </DiscordButton>
        </div>
      </div>
    </ScrollReveal>
  );
}
