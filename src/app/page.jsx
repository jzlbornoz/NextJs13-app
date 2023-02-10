
import { PostList } from '@/components/PostList'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <main>
      <PostList />
    </main>
  )
}
