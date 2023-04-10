import {Post} from '../../types/Posts'

type Props = {
    nome: string
}

const Blog = ({nome}:Props) => {

    return (
        <div>
            <p>Meu nome é {process.env.NEXT_PUBLIC_NOME}</p>
            <p>Nome privado é {nome}</p>
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