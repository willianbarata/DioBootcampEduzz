//igual (==)
//Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
var var1 = 3;
console.log("3" == var1);
console.log(3 == "3");

//Não igual (!=)
//Retorna verdadeiro caso os operadores não sejam iguais. -var != 4

console.log(var2 != "3");

//estritamente igual (===)
//Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object.is 

console.log(3 ===var1);

//Estritamente não igual (!==)
//Retorna verdadeiro caso os operando não sejam iguais e/ou não sejam do mesmo tipo

console.log(var1 !== "3");
console.log(3 !=='3');

//Maior que (>)
//Retorna verdadeiro caso o operando da esquera seja maior que o da direita
var var2 = 90

console.log(var2 > var1);
console.log("12" > 2);

//maior que ou igual (>=)
//retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita

console.log(var2 >= var1);
console.log(var1 >= 3);

//menor que (<)
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita
console.log(var1 < var2);
console.log("12" < "2");

//menor que ou igual (<=)
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita
console.log(var1 <= var2);
console.log("12" <= "2");