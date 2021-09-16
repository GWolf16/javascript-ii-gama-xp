// let -> só funciona onde ela foi declarada, pode ser atualizada.
// const -> invariável, escopo local
// var -> hoistling, escopo global, pode ser atualizada.
var a = 5
function teste_let (z){
    let x = 3
    const b = 6
    console.log(x)
    console.log(b)
    console.log(x+z+a+b)
}

teste_let(4)
console.log(x)  