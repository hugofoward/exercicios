import { useState } from "react"

export default function Formulario(){
    const [valor, setValor] = useState('inicial')

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} onChange={e=>setValor(e.target.value)} />
            <button onClick={alterarInput}>Adicionar exclamação</button>
        </div>
    )
}
