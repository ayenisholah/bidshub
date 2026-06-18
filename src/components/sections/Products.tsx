import { CheckCircle2, Clock4, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordButton } from "@/components/ui/DiscordButton";
import { DiscordPill } from "@/components/ui/DiscordPill";
import { GradientText } from "@/components/ui/GradientText";
import { PRODUCTS } from "@/lib/content";

export function Products() {
  const available = PRODUCTS.filter((p) => p.status === "available");
  const coming = PRODUCTS.filter((p) => p.status === "coming");

  return (
    <section id="products" className="py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            Products
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            <GradientText>What We&rsquo;re Building</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            We&rsquo;re launching with our first core products, with more on the way.
          </p>
        </ScrollReveal>

        {/* Available now */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 size={15} className="text-accent-cyan" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-accent-cyan font-display">
              Available Now
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {available.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <article className="glass-card p-7 h-full hover:border-accent-violet/40 hover:glow-violet transition-all duration-300 group">
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-accent-violet-light transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {product.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Subscription line */}
        <ScrollReveal>
          <div className="glass-card p-5 mb-14 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <p className="text-sm text-text-secondary">
              Subscription plans are available now. Need API access, a trial, or a
              custom setup?{" "}
              <DiscordPill label="Open a ticket" /> in our Discord.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 px-4 py-2 text-xs border border-accent-violet/50 text-accent-violet-light hover:bg-accent-violet/10 hover:border-accent-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet shrink-0"
            >
              View Pricing
            </a>
          </div>
        </ScrollReveal>

        {/* Coming next */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Clock4 size={15} className="text-text-muted" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.15em] font-semibold text-text-muted font-display">
              Coming Next
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {coming.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <article className="glass-card p-7 h-full border-dashed opacity-75">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold font-display">{product.name}</h3>
                    <span className="shrink-0 text-[10px] px-2 py-1 rounded-full border border-white/10 text-text-muted font-mono uppercase tracking-wider">
                      Soon
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {product.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center">
          <p className="text-text-muted text-sm mb-6">
            Thank you for being here early. More updates are coming soon.
          </p>
          <DiscordButton variant="primary" className="gap-2">
            Join BidsHub on Discord
            <ArrowRight size={15} aria-hidden="true" />
          </DiscordButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
