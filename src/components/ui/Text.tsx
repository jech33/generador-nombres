// components/ui/Text.tsx
import React from "react";
import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "small";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export const Text = ({
  children,
  variant = "p",
  className = "",
  as,
}: TextProps) => {
  const Component = as || variant;

  const variants: Record<NonNullable<TextProps["variant"]>, string> = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    p: "text-base text-gray-800",
    small: "text-sm text-gray-600",
  };

  const textClasses = cn(variants[variant], className);

  return <Component className={textClasses}>{children}</Component>;
};
