/*
   div
        span 1,
        span 2,
        span 3,
        span 4,
        span 5,
        span 6,
        span 7,
        span 8,
        span 9,
        span 10,
        
   /div
*/

export default function lista1(){
    return (
        <div>
            {itens(10)} 
        </div>
    )
}


function itens(qtd) {
    const lista = []
    for (let i = 1; i <= qtd; i++) { 
       lista.push(<span>{i},</span>)
    }
    return lista
}