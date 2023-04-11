import Images from 'next/image'
import googleImage from '../../public/images/google-logo-1.png'

const mainPage = () => {

    return (
        <>
            <h1>Texto da página main</h1>

            <p>Imagem local estática</p>
            <Images
                src={googleImage}
                alt=''
                width={300}
            />
        </>
    )
}

export default mainPage