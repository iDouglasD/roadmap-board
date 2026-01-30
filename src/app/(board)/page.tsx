import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section } from "@/components/section";

import { listIssues } from "@/http/list-issues";

export const metadata: Metadata = {
  title: "Board"
};

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const issues = await listIssues({ search: q });

  const issuesBacklogIsEmpty = issues.backlog.length === 0;
  const issuesTodoIsEmpty = issues.todo.length === 0;
  const issuesInProgressIsEmpty = issues.in_progress.length === 0;
  const issuesDoneIsEmpty = issues.done.length === 0;

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>
          <Section.IssueCount>
            {issues.backlog.length}
          </Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {
            issuesBacklogIsEmpty ? (
              <div className="flex items-center justify-center text-center py-8">
                <p className="text-sm text-navy-300">
                  No issues in the backlog.
                </p>
              </div>
            ) : (
              issues.backlog.map(issue => (
                <Card.Root key={issue.id} href={`/issues/${issue.id}`}>
                  <Card.Header>
                    <Card.Number>
                      ISS-{issue.issueNumber}
                    </Card.Number>
                    <Card.Title>
                      {issue.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">10</span>
                    </Button>
                    <Button
                      type="button"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">6</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              ))
            )
          }
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            To-do
          </Section.Title>
          <Section.IssueCount>
            {issues.todo.length}
          </Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {
            issuesTodoIsEmpty ? (
              <div className="flex items-center justify-center text-center py-8">
                <p className="text-sm text-navy-300">
                  No issues in the to-do list.
                </p>
              </div>
            ) : (
              issues.todo.map(todo => (
                <Card.Root key={todo.id} href={`/issues/${todo.id}`}>
                  <Card.Header>
                    <Card.Number>
                      ISS-{todo.issueNumber}
                    </Card.Number>
                    <Card.Title>
                      {todo.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">10</span>
                    </Button>
                    <Button
                      type="button"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">6</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              ))
            )
          }
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In progress
          </Section.Title>
          <Section.IssueCount>
            {issues.in_progress.length}
          </Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {
            issuesInProgressIsEmpty ? (
              <div className="flex items-center justify-center text-center py-8">
                <p className="text-sm text-navy-300">
                  No issues in progress.
                </p>
              </div>
            ) : (
              issues.in_progress.map(in_progress => (
                <Card.Root key={in_progress.id} href={`/issues/${in_progress.id}`}>
                  <Card.Header>
                    <Card.Number>
                      ISS-{in_progress.issueNumber}
                    </Card.Number>
                    <Card.Title>
                      {in_progress.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">10</span>
                    </Button>
                    <Button
                      type="button"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">6</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              ))
            )
          }
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>
          <Section.IssueCount>
            {issues.done.length}
          </Section.IssueCount>
        </Section.Header>
        <Section.Content>
          {
            issuesDoneIsEmpty ? (
              <div className="flex items-center justify-center text-center py-8">
                <p className="text-sm text-navy-300">
                  No done issues.
                </p>
              </div>
            ) : (
              issues.done.map(done => (
                <Card.Root key={done.id} href={`/issues/${done.id}`}>
                  <Card.Header>
                    <Card.Number>
                      ISS-{done.issueNumber}
                    </Card.Number>
                    <Card.Title>
                      {done.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">10</span>
                    </Button>
                    <Button
                      type="button"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">6</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              ))
            )
          }
        </Section.Content>
      </Section.Root>
    </main>
  );
}
