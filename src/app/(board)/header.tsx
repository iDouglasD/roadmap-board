"use client";

import { Input } from "@/components/input";
import { authClient } from "@/lib/auth-client";
import { Loader2Icon, LogInIcon, SearchIcon } from "lucide-react";
import { parseAsString, useQueryState, debounce } from "nuqs";
import { ChangeEvent } from "react";


export function Header() {
  const { data: session, isPending } = authClient.useSession()
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  const isAuthenticated = !isPending && session?.user;

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    });
  }

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' });
  }

  async function handleSignOut() {
    await authClient.signOut();
  }

  return (
    <div className="max-w-225 mx-auto w-full flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Roadmap Board</h1>
        <p className="text-sm text-navy-100">
          Track and manage your project tasks efficiently
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="size-4 absolute text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            className="w-67.5 pl-8"
            type="text"
            placeholder="Search for features"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>
        {
          isPending && (
            <div
              className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center"
            >
              <Loader2Icon className="size-3.5 text-navy-200 animate-spin" />
            </div>
          )
        }
        {
          isAuthenticated && (
            <button
              className="size-8 rounded-full overflow-hidden cursor-pointer"
              type="button"
              onClick={handleSignOut}
              disabled={isPending}
            >
              <img
                className="size-8 rounded-full"
                src={session.user.image ?? ''}
                alt={session.user.name}
              />
            </button>
          )
        }
        {
          !isAuthenticated && (
            <button
              className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150"
              type="button"
              onClick={handleSignIn}
              disabled={isPending}
            >
              <LogInIcon className="size-3.5 text-navy-200" />
            </button>
          )}
      </div>
    </div>
  )
}