export function mega(quantidade = 6, numeros = []) {
    // converte uma possível string em um valor numérico, o + na frente converte em valor numérico.
    let qtde = +quantidade
    // console.log(numeros)
    if(qtde < 6 && qtde > 60) {
        throw "Quantidade inválida!"
    }

    if(numeros.length == qtde) {
        return numeros.sort((n1,n2) => n1-n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60 ) +1
    if(!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }
}