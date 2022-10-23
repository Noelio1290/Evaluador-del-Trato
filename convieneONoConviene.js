function funcionPrincipal(n){
    function operacionExponencial(n){
        const exponential = 2**n
        console.log(exponential)
        return 2**n    
    }
    function operacionLineal(n){
        const lineall = 1000*n
        console.log(lineall)
        return 1000*n
    }

    const exponencial = operacionExponencial(n)
    const lineal = operacionLineal(n)

    if (exponencial>lineal){
        return 'no conviene'
        }else{
        return 'conviene'
        }
}
console.log(funcionPrincipal(365))