'use client'
import { Navigation } from '@/components/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ArticleList } from './components/article-list'

const queryClient = new QueryClient()

export const ArticlesPage = () => {
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

export default ArticlesPage
