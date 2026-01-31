import type { ComponentProps } from "react";
import { cn } from "@/utils/tw-merge";

interface InputProps extends ComponentProps<"input"> { }

export function Input({ className, ...props }: InputProps) {

  return (
    <input
      className={cn(
        "bg-navy-900 border-[0.5px] border-navy-500 h-10 flex items-center placeholder:text-navy-200 px-3 rounded-lg text-sm",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
        className
      )}
      {...props}
    />
  )
}