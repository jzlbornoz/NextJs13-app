import React from 'react'
import { Counter } from '../components/Counter'

const postLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main>
            <h1>PostsPage</h1>
            <Counter />
            {children}
        </main>
    )
}

export default postLayout