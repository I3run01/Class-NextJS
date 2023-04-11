import { ReactComponentElement, ReactElement } from "react"


type Props = {
    children: ReactElement
}

const Layout = ({children}: Props) => {

    return (
        <>


            <h1>Texto do layout</h1>
            <main>{children}</main>
            <h1>Texto do layout</h1>
        </>
    )
}

export default Layout