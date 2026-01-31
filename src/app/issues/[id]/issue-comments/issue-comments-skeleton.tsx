import { Skeleton } from "@/components/skeleton";

export function IssueCommentsSkeleton() {

  return (
    <div className="space-y-3">
      {
        Array.from({ length: 3 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: this is a static skeleton
          <div key={index} className="flex items-start gap-3">
            <Skeleton className="size-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}