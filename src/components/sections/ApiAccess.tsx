import { Terminal, Zap, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { DiscordPill } from "@/components/ui/DiscordPill";
import { GradientText } from "@/components/ui/GradientText";

const CODE_SAMPLE = `// BidsHub API — place an offer on OpenSea
const res = await fetch("https://api.bidshub.io/v1/offers", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    marketplace: "opensea",
    collection:  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    price_eth:   0.08,
    expiry_mins: 30,
    wallets:     ["0xYourWallet1", "0xYourWallet2"],
  }),
});

const { offer_id, status } = await res.json();
// status: "queued" → "submitted" → "confirmed"`;

const speedStats = [
  { label: "Avg response", value: "<50 ms" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Supported", value: "OpenSea + Blur" },
  { label: "Events", value: "Real-time WS" },
];

export function ApiAccess() {
  return (
    <section id="api" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            Developer Access
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            <GradientText>BidsHub API</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            BidsHub provides API access for users who want to integrate high-speed
            NFT offer execution into their own bot or trading setup. Send large
            volumes of requests to OpenSea and Blur — up to hundreds of offers per
            second, depending on your plan, configuration, and infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code terminal */}
          <ScrollReveal>
            <div className="glass-card overflow-hidden">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
                <span className="ml-3 text-xs text-text-muted font-mono">
                  api-example.ts
                </span>
              </div>
              <pre className="p-5 text-xs leading-6 text-text-secondary font-mono overflow-x-auto">
                <code>{CODE_SAMPLE}</code>
              </pre>
            </div>
          </ScrollReveal>

          {/* Right column */}
          <div className="space-y-5">
            {/* Speed stats */}
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Zap size={15} className="text-accent-cyan" aria-hidden="true" />
                  <h3 className="font-bold font-display">Performance</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {speedStats.map((stat) => (
                    <div key={stat.label} className="p-3 rounded-lg bg-white/[0.03] border border-border-subtle">
                      <div className="text-xl font-bold font-mono tabnum gradient-text mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.15}>
              <div className="glass-card p-6 space-y-3 text-sm text-text-secondary leading-relaxed">
                <div className="flex items-start gap-2">
                  <Terminal size={14} className="text-accent-violet mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    Full API documentation is provided after subscription. Rate
                    limits scale with your plan.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Terminal size={14} className="text-accent-violet mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    Need API access or a custom integration? Open a ticket in{" "}
                    <DiscordPill label="#create-a-ticket" />.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.2}>
              <DiscordButton variant="primary" className="w-full gap-2">
                Open a Ticket for API Access
                <ArrowRight size={15} aria-hidden="true" />
              </DiscordButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
