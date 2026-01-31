
import { IssueInteractionsResponseSchema } from '@/api/routes/schemas/issue-interactions';
import { clientEnv } from '@/client-env';

interface GetIssueInterectionsParams {
    issueIds: string[];
}

export async function getIssueInterections({ issueIds }: GetIssueInterectionsParams) {
  const url = new URL('/api/issues/interactions', clientEnv.NEXT_PUBLIC_API_URL);

  url.searchParams.set('issueIds', issueIds.join(','));

  const response = await fetch(url, {
    credentials: 'include',
  });

  const data = await response.json();

  return IssueInteractionsResponseSchema.parse(data);
}