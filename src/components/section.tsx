import { cn } from "@/utils/tw-merge"
import { ComponentProps } from "react"


interface SectionRootProps extends ComponentProps<"div"> { }

function SectionRoot({ className, ...props }: SectionRootProps) {
  return (
    <div className={cn("bg-navy-800 rounded-xl border-[0.5px] border-navy-500 pt-3 flex flex-col", className)} {...props} />
  )
}

interface SectionHeaderProps extends ComponentProps<"div"> { }

function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between px-3", className)} {...props} />
  )
}

interface SectionTitleProps extends ComponentProps<"span"> { }

function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <span className={cn("bg-navy-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs", className)} {...props} />
  )
}

interface SectionIssueCountProps extends ComponentProps<"span"> { }

function SectionIssueCount({ className, ...props }: SectionIssueCountProps) {
  return (
    <span className={cn("text-xs text-navy-200", className)} {...props} />
  )
}

interface SectionContentProps extends ComponentProps<"div"> { }

function SectionContent({ className, ...props }: SectionContentProps) {
  return (
    <div className={cn("flex flex-col gap-2.5 p-3", className)} {...props} />
  )
}

export const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Title: SectionTitle,
  IssueCount: SectionIssueCount,
  Content: SectionContent,
}