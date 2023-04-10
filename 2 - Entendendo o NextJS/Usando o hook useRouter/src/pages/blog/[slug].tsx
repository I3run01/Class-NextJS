import { useRouter } from "next/router"
import { useEffect } from "react"

const BlogItem = () => {
    const router = useRouter()
    const { slug } = router.query

    useEffect(()=>{


        //quando mudei de rota
        router.events.on('routeChangeComplete', () => {})

        //quando vou mudar de rota
        router.events.on('routeChangeStart', () => {})

        return () => {
            //Para o evento
            router.events.off('routeChangeComplete', ()=> {})
        }

    }, [])

    return (
        <div>
            <h1>Página de {slug}</h1>
            <p>Pathname: {router.pathname}</p>
            <p>isFallback: {router.isFallback.toString()}</p>

            <button onClick={()=> {
                //router.push('/sobre/pedro')
                //rota normal
                
               // router.replace('/sobre/pedro') -> Substitui a página atual pela página pedro, não tem como voltar dai

               //Você coloca as propriedade que você quer ir
               router.push({
                pathname: '/sobre/[slug]',
                query: {slug: 'pedro'}
               })
            }}>Ir para a página de Pedro</button>
        </div>
    )
}

export default BlogItem

