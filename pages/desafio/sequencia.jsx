import { useEffect,useState } from "react";
import Numero from "../../components/sequencia/Numero";

export default function sequencia(){
    const [qtdSequencia,set_qtdSequencia] = useState([])
    useEffect(() => set_qtdSequencia(1), [])
    return (
       <div>
           <span>Array</span> 
           <input type="number" value={qtdSequencia} onChange={e => set_qtdSequencia(e.target.value)} />
           <Numero digitos={qtdSequencia} />
       </div>
    )
}