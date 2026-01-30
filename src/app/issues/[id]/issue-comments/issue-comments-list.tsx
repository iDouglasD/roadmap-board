import { formatDistanceToNow } from 'date-fns'

import { listIssueComments } from "@/http/list-issue-comments";
import { Comment } from "@/components/comment";

interface IssueCommentsListProps {
  issueId: string;
}

export async function IssueCommentsList({ issueId }: IssueCommentsListProps) {
  const { comments } = await listIssueComments({ issueId });

  const isEmpty = comments.length === 0;

  return (
    <div className="data-[empty=false]:space-y-3" data-empty={isEmpty}>
      {
        isEmpty && (
          <p className='text-navy-400 text-sm text-center py-2'>
            No comments yet.
          </p>
        )
      }
      {
        !isEmpty && comments.map(comment => (
          <Comment.Root key={comment.id}>
            <Comment.Avatar src={comment.author.avatar} />
            <Comment.Content>
              <Comment.Header>
                <Comment.Author>
                  {comment.author.name}
                </Comment.Author>
                <Comment.Time>
                  {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
                </Comment.Time>
              </Comment.Header>
              <Comment.Text>
                {comment.text}
              </Comment.Text>
            </Comment.Content>
          </Comment.Root>
        ))
      }
    </div>
  )
}