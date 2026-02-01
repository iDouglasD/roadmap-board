# Roadmap Board

A modern, full-stack roadmap management application built with Next.js 16, featuring advanced routing patterns, server-side caching, and real-time data synchronization.

## Key Features

- ** Kanban Board**: Organize issues across four stages (Backlog, To Do, In Progress, Done)
- ** Authentication**: Secure user authentication powered by Better Auth
- ** Comments System**: Engage in discussions on each issue
- ** Like System**: Interactive voting system with optimistic updates
- ** Real-time Search**: Instant search with URL state management
- ** Responsive Design**: Mobile-first design with Tailwind CSS
- ** Performance Optimized**: Server-side caching and React Query for data fetching

## Advanced Next.js Features

### Parallel Routes
The application uses **parallel routes** (`@modal`) to render the issue modal alongside the main board content, enabling:
- Non-blocking UI updates
- Independent loading states
- Better user experience with modal overlays

### Intercepting Routes
**Intercepting routes** (`(.)issues/[id]`) provide:
- Modal view when clicking issues from the board
- Full page view when accessing URLs directly
- Seamless navigation between contexts

### Next.js Cache
Leverages Next.js 16's `'use cache'` directive for:
- Automatic request memoization
- Reduced database queries
- Faster page loads
- Optimized Open Graph image generation

### React Server Components
- Server-side data fetching by default
- Reduced client-side JavaScript
- Improved SEO and initial load performance

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### State Management & Data Fetching
- **[TanStack Query (React Query)](https://tanstack.com/query)** - Powerful data synchronization
  - Automatic caching
  - Background refetching
  - Optimistic updates
  - Query invalidation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form management
- **[nuqs](https://nuqs.47ng.com/)** - Type-safe URL search params

### Backend
- **[Hono](https://hono.dev/)** - Ultrafast web framework
- **[Hono OpenAPI](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)** - Type-safe API with OpenAPI
- **[Scalar](https://github.com/scalar/scalar)** - Beautiful API documentation
- **[Better Auth](https://www.better-auth.com/)** - Modern authentication solution
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust database
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migrations
- **[Docker](https://www.docker.com/)** - Containerized PostgreSQL

## Prerequisites

- **Node.js** 20+ 
- **pnpm** (recommended) or npm
- **Docker** (for local database)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iDouglasD/roadmap-board.git
cd roadmap-board
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the example environment file:

```bash
cp env-example .env.local
```

Update the `.env.local` file with your configuration:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/roadmap"

# App
NEXT_PUBLIC_API_URL="http://localhost:3000"

# Auth (Better Auth)
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

### 4. Start the database

```bash
docker-compose up -d
```

### 5. Run database migrations

```bash
pnpm db:push
```

### 6. (Optional) Seed the database

```bash
pnpm db:seed
```

### 7. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:studio` | Open Drizzle Studio |
| `pnpm db:seed` | Seed database with fake data |

## 🏗️ Project Structure

```
roadmap-board/
├── src/
│   ├── api/                    # Backend API (Hono)
│   │   ├── auth.ts            # Better Auth configuration
│   │   ├── db/                # Database schema and migrations
│   │   ├── middlewares/       # API middlewares
│   │   └── routes/            # API endpoints
│   ├── app/                   # Next.js App Router
│   │   ├── (board)/          # Board route group
│   │   ├── @modal/           # Parallel route for modals
│   │   ├── api/              # API route handlers
│   │   └── issues/           # Issue detail pages
│   ├── components/           # Reusable React components
│   ├── http/                 # Frontend API client
│   ├── lib/                  # Shared utilities
│   └── utils/                # Helper functions
├── docker-compose.yml        # PostgreSQL container
├── drizzle.config.ts         # Drizzle ORM configuration
└── package.json              # Project dependencies
```

## Key Technical Implementations

### React Query Integration

```typescript
// Automatic caching and background refetching
const { data, isPending } = useQuery({
  queryKey: ['issues', issueId],
  queryFn: () => getIssue({ issueId }),
});

// Optimistic updates for likes
const mutation = useMutation({
  mutationFn: toggleLike,
  onMutate: async () => {
    // Optimistically update UI
  },
  onSettled: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries(['issue-likes']);
  },
});
```

### Next.js Cache Directive

```typescript
export async function getIssue({ issueId }: GetIssueParams) {
  'use cache'; // Automatic request memoization
  
  const response = await fetch(url);
  return response.json();
}
```

### Intercepting Routes Pattern

```
app/
├── @modal/
│   └── (.)issues/[id]/page.tsx  # Modal view (intercepted)
└── issues/
    └── [id]/page.tsx             # Full page view (direct)
```

### Type-Safe API with Hono OpenAPI

```typescript
const route = createRoute({
  method: 'get',
  path: '/issues/{id}',
  request: {
    params: z.object({ id: z.string() }),
  },
  responses: {
    200: {
      content: {
        'application/json': { schema: IssueResponseSchema },
      },
    },
  },
});
```

## Authentication

Built with **Better Auth**, providing:
- Email/Password authentication
- Session management
- Protected routes
- Server and client hooks
- Automatic token refresh

## Docker Support

The project includes a Docker Compose configuration for PostgreSQL:

```yaml
services:
  postgres:
    image: postgres:17-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: roadmap
```

## Database Schema

Key tables:
- **users**: User accounts and profiles
- **sessions**: Authentication sessions
- **issues**: Roadmap issues/tasks
- **comments**: Issue comments
- **issue_likes**: User likes on issues

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
