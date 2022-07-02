import { useState } from "react"

export default function mouse() {
    
    //React Hooks
    const [x,setX]= useState(0)
    const [y,alterarY] = useState(0)
    
    
    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)

        console.log(ev.clientX, ev.clientY)
    }
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#222",
            color: "#fff",
            height:"100vh"
        }}
            onMouseMove={quandoMover}
        >
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}