
import { PostList } from '@/components/PostList'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <main>
      <h2 style={{
        'margin-top': '5vh', 'text-align': 'center',
        'margin-bottom': '20px'
      }}>Most Popular</h2>
      <PostList />
    </main>
  )
}
