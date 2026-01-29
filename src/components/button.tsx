import { cn } from "@/utils/tw-merge";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> { }

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer",
        "hover:bg-navy-500 transition-colors duration-200 ease-in-out",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
        className
      )}
      {...props}
    />
  )
}