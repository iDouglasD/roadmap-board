
import { IssueSchema } from '@/api/routes/get-issue'
import { clientEnv } from '@/client-env';

interface GetIssueParams {
    issueId: string;
}

export async function getIssue({ issueId }: GetIssueParams) {
  const url = new URL(`/api/issues/${issueId}`, clientEnv.NEXT_PUBLIC_API_URL);

  const response = await fetch(url);
  const data = await response.json();

  return IssueSchema.parse(data);
}