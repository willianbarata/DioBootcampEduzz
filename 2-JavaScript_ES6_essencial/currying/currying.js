//tecnica de transformar uma função com vários parâmetros,
//para apenas um parâmetro Exemplo abaixo:

/*function soma(a,b){
    return a+b;
}

soma(2,3);
soma(2,4);
soma(2,5);
soma(2,6); */

function soma(a){
    return function(b){
        return a+b;
    }
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));


