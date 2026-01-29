import { cn } from "@/utils/tw-merge"
import { ComponentProps } from "react"


interface CardRootProps extends ComponentProps<"a"> { }

function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <a
      href="#"
      className={cn(
        "bg-navy-700 border-[0.5px] border-navy-600 p-3 space-y-4 rounded-lg block",
        "hover:bg-navy-600/50 hover:border-navy-500 transition-colors duration-150 ease-in-out",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
        className
      )}
      {...props}
    />
  )
}

interface CardHeaderProps extends ComponentProps<"div"> { }

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

interface CardTitleProps extends ComponentProps<"span"> { }

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <span className={cn("text-sm font-medium", className)} {...props} />
  )
}

interface CardNumberProps extends ComponentProps<"span"> { }

function CardNumber({ className, ...props }: CardNumberProps) {
  return (
    <span className={cn("text-xs text-navy-200", className)} {...props} />
  )
}

interface CardFooterProps extends ComponentProps<"div"> { }

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props} />
  )
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Number: CardNumber,
  Footer: CardFooter,
}