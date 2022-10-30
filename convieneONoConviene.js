function funcionPrincipal(n){
    let exponential = 2**(n-1)
    let acumulado = exponential - 1
    let suma = exponential + acumulado
    const lineal = 1000*n
    const resultado = {
        ultimoDia: exponential,
        total: suma,
        esConveniente: suma>lineal ? 'no conviene':'conviene',
    }
    return resultado
}
console.log(funcionPrincipal(4))
