import { GetStaticProps } from 'next'
import { Post } from "@/types/Posts"
import { ParsedUrlQuery } from 'querystring'

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

    const paths = posts.map(post => ({
        params: {id: post.id.toString()}
    }))

    return {paths, fallback: 'blocking'}

    //fallback false -> se o conteúdo não existir, manda para uma página 404
    //fallback 'blocking' -> se não encontrar o conteúdo, ele vai procurar no getStaticProps e depois salvar no cache
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { id } = context.params as IParams

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}