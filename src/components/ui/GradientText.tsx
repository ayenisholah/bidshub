import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "violet-cyan" | "violet-magenta";
};

export function GradientText({
  children,
  className,
  as: Tag = "span",
  variant = "violet-cyan",
}: Props) {
  return (
    <Tag
      className={cn(
        variant === "violet-cyan" ? "gradient-text" : "gradient-text-magenta",
        className
      )}
    >
      {children}
    </Tag>
  );
}
