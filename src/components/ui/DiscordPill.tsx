import Link from "next/link";
import { DISCORD_URL } from "@/lib/content";

type Props = {
  label: string;
};

export function DiscordPill({ label }: Props) {
  return (
    <Link
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold
                 bg-accent-violet/15 border border-accent-violet/30 text-accent-violet-light
                 hover:bg-accent-violet/25 hover:border-accent-violet/50 transition-colors
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
    >
      {label}
    </Link>
  );
}
