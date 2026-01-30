import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import { Section } from "@/components/section"
import { Card } from "@/components/card";
import { Button } from "@/components/button";

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>
          <Section.IssueCount>
            10
          </Section.IssueCount>
        </Section.Header>
        <Section.Content>
          <Card.Root>
            <Card.Header>
              <Card.Number>
                ECO-001
              </Card.Number>
              <Card.Title>
                Implement authentication flow
              </Card.Title>
            </Card.Header>
            <Card.Footer>
              <Button
                type="button"
              >
                <ThumbsUpIcon className="size-3" />
                <span className="text-sm">12</span>
              </Button>
              <Button
                type="button"
              >
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">6</span>
              </Button>
            </Card.Footer>
          </Card.Root>
        </Section.Content>
      </Section.Root>
    </main>
  );
}
