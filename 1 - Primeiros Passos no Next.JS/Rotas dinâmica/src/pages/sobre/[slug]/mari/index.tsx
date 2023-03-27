import { useRouter } from "next/router"

const Mari = () => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div>
            Rota dinâmina e depois Mari e {slug}
        </div>
    )
}

export default Mari