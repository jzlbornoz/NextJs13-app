
const postsLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main>
            <h1>PostsPage</h1>
            {children}
        </main>
    )
}

export default postsLayout