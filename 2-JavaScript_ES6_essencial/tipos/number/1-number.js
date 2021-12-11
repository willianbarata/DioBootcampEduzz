const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('\n Número com duas casas decimais: ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais', fixedTwoDecimals);

//transforma uma string em float
console.log('\n String parseada para floag: ', parseFloat('13.22'));

//transforma uma string em int
console.log('\n String parseada para int: ', parseInt('13.20'));