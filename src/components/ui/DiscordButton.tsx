import Link from "next/link";
import { DISCORD_URL } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-violet to-accent-cyan text-white hover:opacity-90 hover:scale-105 shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)]",
  outline:
    "border border-accent-violet/50 text-accent-violet-light hover:bg-accent-violet/10 hover:border-accent-violet",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/5",
};

export function DiscordButton({
  children = "Join Discord",
  className,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
