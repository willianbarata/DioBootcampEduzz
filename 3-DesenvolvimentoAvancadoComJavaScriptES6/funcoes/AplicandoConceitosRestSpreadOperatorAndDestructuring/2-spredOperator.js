const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5,6,5,6,5));

//spread operator pode ser utilizado em string, array, objects e objetos iteraveis

const str = 'Digital Innovation One';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);

//Utilização em Array

const arr = [1,2,3,4];

function logArgumentos(){
    console.log(arguments);
};

logArgumentos(...arr);


//unindo array de forma tradicional

const arr2 = [5,6,7].concat(arr);

console.log(arr2);

//unindo array com spread operator

const arr3 = [...arr, 8, 8, 8];

const arr4 = [8, 8, 8, ...arr];

console.log(arr3);
console.log(arr4);

