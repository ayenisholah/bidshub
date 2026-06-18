import { AlertTriangle, HelpCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DiscordPill } from "@/components/ui/DiscordPill";
import { GradientText } from "@/components/ui/GradientText";

const faqs = [
  {
    question: "What is BidsHub?",
    answer: (
      <p>
        BidsHub is a high-speed NFT bidding infrastructure built for
        maximum-speed offer execution, same-second counterbidding, and API
        access for custom trading bots.
      </p>
    ),
  },
  {
    question: "Do you offer a free trial?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. Trial access is available for 3 days and includes 1 bid per
          second plan.
        </p>
        <p>
          The trial is designed to help users get familiar with the BidsHub
          interface and core functionality before choosing a subscription plan.
        </p>
        <p>
          To request a trial, open a ticket in{" "}
          <DiscordPill label="#create-a-ticket" />.
        </p>
      </div>
    ),
  },
  {
    question: "Where can I see subscription plans?",
    answer: (
      <p>
        All plans are listed in{" "}
        <DiscordPill label="#subscription" href="#pricing" />.
      </p>
    ),
  },
  {
    question: "Do you offer discounts for longer subscriptions?",
    answer: (
      <div className="space-y-3">
        <p>Yes.</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            ["3 months", "10% discount"],
            ["6 months", "20% discount"],
            ["12 months", "30% discount"],
          ].map(([months, discount]) => (
            <div
              key={months}
              className="rounded-lg border border-border-subtle bg-white/[0.03] p-3"
            >
              <div className="font-mono text-xs text-text-muted">{months}</div>
              <div className="mt-1 font-bold text-accent-cyan">{discount}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "Will pricing change after beta?",
    answer: (
      <p>
        Yes. Current pricing is early-access beta pricing. After the full
        launch, prices may increase. Early subscribers will keep their current
        rate for as long as their subscription remains active.
      </p>
    ),
  },
  {
    question: "What is the difference between plans?",
    answer: (
      <p>
        The main difference is bidding speed. Higher plans allow more bids per
        second.
      </p>
    ),
  },
  {
    question: "Can I get more than 150 bids per second?",
    answer: (
      <p>
        Yes. For higher limits or custom infrastructure, open a ticket and ask
        about a custom plan.
      </p>
    ),
  },
  {
    question: "Do you provide API access?",
    answer: (
      <p>
        Yes. BidsHub provides API access for users who want to send large
        volumes of requests to OpenSea through their own custom bot or trading
        setup.
      </p>
    ),
  },
  {
    question: "Can BidsHub guarantee profit?",
    answer: (
      <p>
        No. NFT trading is risky, and profit is never guaranteed. BidsHub
        provides automation, speed, tools, and infrastructure, but every user is
        responsible for their own strategy and risk management.
      </p>
    ),
  },
  {
    question: "How do I get support?",
    answer: (
      <p>
        Open a private ticket in <DiscordPill label="#create-a-ticket" /> and
        briefly explain your issue or request.
      </p>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 px-4 sm:px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-violet-light font-semibold font-display mb-4">
            Support
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-5">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Quick answers about BidsHub access, plans, discounts, API use, and
            support.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-5">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.03}>
              <article className="glass-card p-6 h-full">
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={16}
                    className="text-accent-cyan mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold font-display mb-3">
                      {faq.question}
                    </h3>
                    <div className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={faqs.length * 0.03}>
            <article className="glass-card p-6 h-full border-accent-violet/40">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={16}
                  className="text-accent-violet-light mt-1 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold font-display mb-3">
                    Will support ever DM me first?
                  </h3>
                  <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                    <p>No. Be careful with fake support accounts.</p>
                    <div className="rounded-lg border border-accent-violet/30 bg-accent-violet/10 p-4">
                      <p className="font-semibold text-text-primary mb-1">
                        Security reminder
                      </p>
                      <p>
                        We will never ask for your seed phrase, private key, or
                        wallet recovery phrase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
