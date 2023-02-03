# NextJs 13

## Fetching de datos

- Anteriormente los fetch de datos se hacian desde un useEffect, en esta version ya no se puede, ya que useEffect y useState solo se pueden utilizar en `Client Components`. Cabe resaltar que el directorio app es un `server component`.

- Entonce esta es la nueva manera de realizar el fetch desde el servidor como `React Server Component`.

```

export interface PostsModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const fetchPosts = async () => {
    const { data } = await axios.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts');

    return data;
}

const PostsPage = async () => {
    const postList: PostsModel[] = await fetchPosts();
    return (
        <main>
            <h1>PostsPage</h1>
            <div>
                {postList.slice(0, 5).map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
```
