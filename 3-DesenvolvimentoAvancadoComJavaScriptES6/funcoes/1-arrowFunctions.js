//função tradicional
function log(value){
    console.log(value);
}
log('teste');


//funcões anônimas
var teste = function(valor){
    console.log(valor);
}

teste('willian');

var sumOld = function(a,b){
    return a+b;
}

//Arrow Functions

var sum = (a,b) => a+b;

console.log(sum(5,8));

//se houver muitas informações na função, deve usar a chave e o return
var sumB = (a,b) => {
    var x = 10;
    if(x > 9){
        return a*b;
    }
    return a-b;
}
console.log(sumB(5,8));

//se existir apenas um argumento, não é necessário os parênteses

var sumC = a => a +8;