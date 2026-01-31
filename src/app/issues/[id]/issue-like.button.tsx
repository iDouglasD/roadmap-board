'use client'

import { useQuery } from "@tanstack/react-query";
import { LikeButton } from "@/components/like-button";
import { Skeleton } from "@/components/skeleton";
import { getIssueInterections } from "@/http/get-issue-interactions";

interface IssueLikeButtonProps {
  issueId: string;
}

export function IssueLikeButton({ issueId }: IssueLikeButtonProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['issue-likes', issueId],
    queryFn: () => getIssueInterections({ issueIds: [issueId] }),
  })

  const interaction = data?.interactions[0]

  return (
    <>
      {
        isLoading && <Skeleton className="h-7 w-16" />
      }
      {
        !isLoading && interaction && (
          <LikeButton
            issueId={issueId}
            initialLikes={interaction.likesCount}
            initialLiked={interaction.isLiked}
          />
        )
      }
    </>
  )
}