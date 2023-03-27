import { useRouter } from "next/router"

const SobreItem = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            Pagina dinâmica
            variável {slug}
        </div>
    )
}

export default SobreItem