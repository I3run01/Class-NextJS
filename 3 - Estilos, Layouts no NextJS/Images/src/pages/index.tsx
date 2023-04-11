import Images from 'next/image'
import googleImage from '../../public/images/google-logo-1.png'

const mainPage = () => {

    return (
        <>
            <h1>Texto da página main</h1>

            <Images
                src={googleImage}
                alt=''
            />
        </>
    )
}

export default mainPage