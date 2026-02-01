import type { ComponentProps } from "react";
import { cn } from "@/utils/tw-merge";

interface IssueEmptyProps extends ComponentProps<"div"> {
  description: string;
}

export function IssueEmpty({ description, className, ...props }: IssueEmptyProps) {

  return (
    <div className={cn("flex items-center justify-center text-center py-8", className)} {...props}>
      <p className="text-sm text-navy-300">
        {description}
      </p>
    </div>
  )
}