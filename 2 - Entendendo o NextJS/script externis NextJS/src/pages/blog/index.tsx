import Script from 'next/script'
import {Post} from '../../types/Posts'

type Props = {
    nome: string
}



const Blog = ({nome}:Props) => {
    const Nome = 'BrunoA'

    return (
        <div>
            <p>Meu nome é {process.env.NEXT_PUBLIC_NOME}</p>
            <p>Nome privado é {nome}</p>
            <p>{Nome}</p>

            <Script
                src='https://google-analytics.com/analytics.js'
                //strategy='lazyOnload' //quando terminar tudo, ela entra
                strategy='beforeInteractive' //antes da interação 
                //strategy='afterInteractive' //depois da interação
                onLoad={() => {
                    //função para executar enquanto carrega o script
                }}

                //Você pode executat um script puro também
            />
        </div>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            nome:process.env.PRIVATE_NAME
        }
    }
}



export default Blog