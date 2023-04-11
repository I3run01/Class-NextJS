import { ReactComponentElement, ReactElement } from "react"
import Head from "next/head"


type Props = {
    children: ReactElement
}

const Layout = ({children}: Props) => {

    return (
        <>

            <Head>
                <title>titulo test</title>
                <meta name="title" content="titulo test"/>
                <meta name="description" content="qualquer titulo"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://metatags.io/"/>
                <meta property="og:title" content="titulo test"/>
                <meta property="og:description" content="qualquer titulo"/>
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://metatags.io/"/>
                <meta property="twitter:title" content="titulo test"/>
                <meta property="twitter:description" content="qualquer titulo"/>
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
            </Head>
            <h1>Texto do layout</h1>
            <main>{children}</main>
            <h1>Texto do layout</h1>
        </>
    )
}

export default Layout