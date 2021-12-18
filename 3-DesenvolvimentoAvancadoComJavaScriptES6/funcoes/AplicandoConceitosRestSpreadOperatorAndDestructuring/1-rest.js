//forma antiga de receber vários parâmetros e somar

function sum(a,b){
    console.log(arguments);

    var value = 0;
    for(var i=0; i < arguments.length ; i++){
        value += arguments[i];
    }
    return value;
}

console.log(sum(5,5,5,2,3));

//rest operator ... nova forma no ecma

function sumNova(...args){
    console.log(args);
    return args.reduce((acc, value) => acc + value, 0);

}

console.log(sumNova(5,5,5,2,3));


//pegando argumentos restantes

const resto = (a,b, ...rest) => {
    console.log(a,b, rest);
}

console.log(resto(5,5,2,3,6));