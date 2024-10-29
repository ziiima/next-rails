'use client'
import { Navigation } from '@/components/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ArticleList } from './article-list'

const queryClient = new QueryClient()

export const articlesPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-4">
        <div>
          <Navigation />
        </div>
        <div>
          <h1>Articles</h1>
          <ArticleList />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default articlesPage
