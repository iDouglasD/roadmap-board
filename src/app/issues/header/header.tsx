import { UserButton } from "@/components/header/user-button";

export function Header() {
  return (
    <div className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Roadmap Board</h1>
        <p className="text-sm text-navy-100">
          Track and manage your project tasks efficiently
        </p>
      </div>
      <div className="flex items-center gap-4">
        <UserButton />
      </div>
    </div>
  )
}