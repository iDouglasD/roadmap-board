"use client";

import { Input } from "@/components/input";
import { LogInIcon, SearchIcon } from "lucide-react";
import { parseAsString, useQueryState, debounce } from "nuqs";
import { ChangeEvent } from "react";


export function Header() {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    });
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
        <button
          className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150"
          type="button"
        >
          <LogInIcon className="size-3.5 text-navy-200" />
        </button>
      </div>
    </div>
  )
}