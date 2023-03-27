import { Post } from "@/types/Posts"

type Props = {
    post: Post
}

const BlogItem = ({post}: Props) => {
    return (
        <div>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default BlogItem

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()

    const paths = posts.map(post => {
        params: {
            id: post.id.toString()
        }
    })

    return {paths, fallback: false}

    //fallback false -> se o conteúdo não existir, manda para uma página 404
    //fallback false -> se o conteúdo não existir, manda para uma página 404
}

export const getStaticProps = async () => {

}