"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, MessageCirclePlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Input } from "@/components/input";

const createCommentSchema = z.object({
  text: z.string().min(1, "Comment cannot be empty").max(500, "Comment cannot be longer than 500 characters"),
})

type CreateCommentData = z.infer<typeof createCommentSchema>;

interface IssueCommentFormProps {
  isAuthenticated: boolean;
  onCreateComment: (text: string) => Promise<void>;
}

export function IssueCommentForm({ onCreateComment, isAuthenticated }: IssueCommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CreateCommentData>({
    resolver: zodResolver(createCommentSchema),
  })

  async function handleCreateComment({ text }: CreateCommentData) {
    await onCreateComment(text);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateComment)} className="relative w-full">
      <Input
        {...register("text")}
        className="bg-navy-900 h-11 pr-24 w-full"
        placeholder={isAuthenticated ? "Leave a comment..." : "Sign in to comment..."}
        disabled={!isAuthenticated || isSubmitting}
      />
      {
        errors.text && (
          <span className="text-xs text-red-400 mt-1">
            {errors.text.message}
          </span>
        )
      }
      <button
        type="submit"
        className="flex items-center gap-2 text-indigo-400 absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:text-indigo-300 cursor-pointer disabled:opacity-50"
        disabled={isSubmitting || !isAuthenticated}
      >
        Publish
        {isSubmitting && <Loader2Icon className="size-3 animate-spin" />}
        {!isSubmitting && <MessageCirclePlusIcon className="size-3" />}
      </button>
    </form>
  )
}