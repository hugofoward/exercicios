export default function Item(props){
    return(
        <li style={{
            listStyle:"none",
            margin: 0
        }}>
            {props.conteudo}
        </li>
    )
}