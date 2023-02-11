import { CommentList } from "@/components/CommentList"
import { Suspense } from "react"

export default async function CommentsPage({ params }) {
    const { id } = params;
    return (
        <section>
            <CommentList postId={id} />
        </section>
    )
}

