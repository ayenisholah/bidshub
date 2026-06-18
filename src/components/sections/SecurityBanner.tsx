import { ShieldCheck } from "lucide-react";
import { DiscordPill } from "@/components/ui/DiscordPill";

export function SecurityBanner() {
  return (
    <div className="bg-bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <ShieldCheck
          size={18}
          className="text-accent-cyan shrink-0 mt-0.5 sm:mt-0"
          aria-hidden="true"
        />
        <p className="text-sm text-text-secondary leading-relaxed">
          <span className="text-text-primary font-semibold">Security reminder:</span>{" "}
          We will never ask for your seed phrase, private key, or wallet recovery
          phrase. Only trust links posted in our{" "}
          <DiscordPill label="#official-links" />{" "}
          Discord channel.
        </p>
      </div>
    </div>
  );
}
