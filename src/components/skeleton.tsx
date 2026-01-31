import type { ComponentProps } from "react";
import { cn } from "@/utils/tw-merge";

interface SkeletonProps extends ComponentProps<"div"> { }

export function Skeleton({ className, ...props }: SkeletonProps) {

  return (
    <div className={cn("bg-navy-700 rounded-lg animate-pulse", className)} {...props} />
  )
}