import Link from "next/link";
import { DISCORD_URL } from "@/lib/content";

type Props = {
  label: string;
  href?: string;
};

export function DiscordPill({ label, href = DISCORD_URL }: Props) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold
                 bg-accent-violet/15 border border-accent-violet/30 text-accent-violet-light
                 hover:bg-accent-violet/25 hover:border-accent-violet/50 transition-colors
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
    >
      {label}
    </Link>
  );
}
