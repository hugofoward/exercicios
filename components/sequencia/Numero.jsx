export default function Numero(props) {
    function montaSequencia(nArray) {
        const sequencias = []
        for (let indice = 0;indice < nArray; indice++ ){
            const sequencia = []
            for (let n = 0; n < 6; n++) {
                // let random = Math.random()
                sequencia.push(
                    <div key={n} style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        flexDirection:"row",
                        height:"60px",
                        width:"60px",
                        backgroundColor:"#000",
                        borderRadius:"35px",
                        margin:"20px",
                        padding:"10",
                        color:"white"}}>
                            
                        {
                           Math.floor(Math.random() * 60) + 1
                        }
                    </div>   
                ) 
            }
            sequencias.push(
                <div key={indice} style={{ display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    {sequencia}
                </div>
            )
        }
     
        return sequencias
    }
    return (
        montaSequencia(props.digitos)
    )
}