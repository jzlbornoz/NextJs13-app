
import { Loading } from '@/components/Loading'
import { PostList } from '@/components/PostList'
import { Inter } from '@next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <main>
      <h2 style={{
        'margin-top': '5vh', 'text-align': 'center',
        'margin-bottom': '20px'
      }}>Most Popular</h2>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>

    </main>
  )
}
