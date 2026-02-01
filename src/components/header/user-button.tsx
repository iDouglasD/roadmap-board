"use client";

import { Loader2Icon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function UserButton() {
  const { data: session, isPending } = authClient.useSession()
  const router = useRouter()

  const isAuthenticated = !isPending && session?.user;

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' });
  }

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        }
      }
    });
  }

  return (
    <>
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
            {/** biome-ignore lint/performance/noImgElement: Github already optimize the image */}
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
    </>
  )
}