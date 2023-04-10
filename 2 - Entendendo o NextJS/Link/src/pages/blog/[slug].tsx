import { useRouter } from "next/router"
import Link from 'next/link'


const BlogItem = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            <h1>Página de {slug}</h1>
            <p>Pathname: {router.pathname}</p>
            <p>isFallback: {router.isFallback.toString()}</p>

            <Link href={'/sobre/pedro'}
                //replace -> substitui a página
                //scroll={false} -> não vai dar scroll até o começo da página
            >Ir para a página de Pedro</Link>  
        </div>
    )
}

export default BlogItem

