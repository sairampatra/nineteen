function outer(par) {
    let variable=12
    let sub= variable-par
    function inner() {
        console.log(variable,sub)
    }
    inner()
}
console.log(outer(17))