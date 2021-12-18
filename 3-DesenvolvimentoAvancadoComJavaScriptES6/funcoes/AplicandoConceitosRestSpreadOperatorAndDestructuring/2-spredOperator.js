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

//unindo objetos com spreed operator

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    teste: 'Olá'
};

console.log(obj2);

//tomar cuidado com cópia de objeto razo, pois se o primeiro objeto tiver um subobjeto, essa propriedade será alterada

//forma incorreta
const obj8 = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj9 = { ...obj8}

obj8.subObj.test = 456;

console.log(obj8);

//forma correta
const obj5 = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj6 = { ...obj5, subObj: { ...obj.subObj}}

obj6.subObj.test = 456;

console.log(obj5);