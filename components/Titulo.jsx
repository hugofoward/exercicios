export default function Titulo(props) {
    return props.pequeno ? (
        <>
            <span>{props.principal}</span>
            <span>{props.secundario}</span>
        </>
    ) :
    (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}