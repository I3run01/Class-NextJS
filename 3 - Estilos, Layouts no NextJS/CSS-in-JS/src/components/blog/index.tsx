export const BlogComponent = () => {

    return (
        <div>
            <button>red</button>

            O global faz com que a página inteira fique vermelha
            sem o global, a estilização vai enquadrar só para o componente
            <style global jsx>
                {
                    `body {
                        background-color: red
                    }`
                }
            </style>
        </div>
    )
}