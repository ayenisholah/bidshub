import { BookmarkCheck, Info, ShieldAlert } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { DiscordPill } from "@/components/ui/DiscordPill";

const reservationRules = [
  "Collections under the Profit Sharing Plan are reserved on a first come, first served basis.",
  "If you reserve a specific collection (e.g. Mutant Ape Yacht Club), other profit-sharing users may still bid on it — but they cannot compete above your bidding level within that collection through BidsHub.",
  "This protects users who are actively working with a reserved collection and avoids internal competition between Profit Sharing Plan users.",
  "Reservations are reviewed manually and remain active only while you are actively working with the reserved collection.",
  "BidsHub may release a reserved collection if there is no meaningful activity, if the collection is being reserved only to block others, or if any abuse is detected.",
  "Users are not allowed to reserve collections without real trading activity.",
  "Any abuse, manipulation, or attempt to bypass the reservation system will lead to immediate service termination.",
];

export function CollectionReservation() {
  return (
    <section className="py-28 px-4 sm:px-6 bg-bg-surface">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <BookmarkCheck
            size={36}
            className="text-accent-violet mx-auto mb-5"
            aria-hidden="true"
          />
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Collection{" "}
            <GradientText>Reservation</GradientText>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-base leading-relaxed">
            For Profit Sharing Plan users only. Lock down your collections to
            avoid internal competition.
          </p>
        </ScrollReveal>

        {/* Rules */}
        <ScrollReveal>
          <div className="glass-card p-7 mb-6">
            <h3 className="font-bold font-display text-lg mb-6">Reservation Rules</h3>
            <ol className="space-y-4">
              {reservationRules.map((rule, i) => (
                <li key={i} className="flex gap-4 text-sm text-text-secondary leading-relaxed">
                  <span className="shrink-0 font-mono text-accent-violet font-bold text-xs mt-0.5">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        {/* Important note — regular subscribers */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-3 rounded-xl border border-accent-cyan/25 bg-accent-cyan/5 p-6 mb-6">
            <Info
              size={18}
              className="text-accent-cyan shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold text-sm mb-2">
                Important — Regular Subscribers
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                This limitation applies{" "}
                <span className="text-text-primary font-semibold">
                  only to Profit Sharing Plans.
                </span>{" "}
                Users with a regular subscription have{" "}
                <span className="text-accent-cyan-light font-semibold">
                  no collection restrictions or bidding limitations
                </span>{" "}
                of any kind — you can target any collection at any time without
                restriction. To manage your subscription or reservations, visit{" "}
                <DiscordPill label="#subscription" />.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Abuse warning */}
        <ScrollReveal delay={0.15}>
          <div className="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <ShieldAlert
              size={16}
              className="text-red-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-text-secondary leading-relaxed">
              Any abuse, manipulation, or attempt to bypass the reservation system
              will lead to immediate service termination.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
