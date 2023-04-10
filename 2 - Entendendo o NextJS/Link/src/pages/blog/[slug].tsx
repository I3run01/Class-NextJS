import { useRouter } from "next/router"

const BlogItem = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            <h1>Página de {slug}</h1>
            <p>Pathname: {router.pathname}</p>
            <p>isFallback: {router.isFallback.toString()}</p>

            <button onClick={()=> {
               
            }}>Ir para a página de Pedro</button>
        </div>
    )
}

export default BlogItem

