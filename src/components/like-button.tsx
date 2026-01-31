import { ThumbsUpIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/utils/tw-merge";
import { Button } from "./button";

interface LikeButtonProps extends ComponentProps<"button"> {
  issueId: string
  initialLikes: number
  initialLiked?: boolean
}

export function LikeButton({ issueId, initialLikes, initialLiked = false, className, ...props }: LikeButtonProps) {
  const liked = initialLiked;

  return (
    <Button
      className={cn("data-[liked=true]:bg-indigo-600 data-[liked=true]:text-white data-[liked=true]:hover:bg-indigo-500", className)}
      aria-label={liked ? "Unlike issue" : "Like issue"}
      data-liked={liked}
      {...props}
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">
        {initialLikes}
      </span>
    </Button>
  )
}