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


