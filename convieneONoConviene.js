function funcionPrincipal(n,initial){
    let exponential = initial*(2**(n-1))
    let acumulado = exponential - initial
    let suma = exponential + acumulado
    const lineal = 1000*n
    const resultado = {
        ultimoDia: exponential,
        total: suma,
        esConveniente: suma>lineal ? 'no conviene':'conviene',
    }
    return resultado
}
console.log(funcionPrincipal(4,4))
