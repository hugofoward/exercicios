export default function Filho(props) {
    //"Passei"
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao} >Falar com o Pai</button>
            <button onClick={() => props.funcao("Passei no ENEM!","teste")} >Falar com o Pai</button>
        </div>
    )
}