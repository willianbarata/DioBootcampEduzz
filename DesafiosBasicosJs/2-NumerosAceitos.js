//Leia 4 valores inteiros A, B, C e D. Com base nisso, se o valor de B for maior do que de C 
//e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se tanto C 
//quanto D forem positivos e, ainda, se a variável A for par, escreva a mensagem "Valores aceitos", 
//senão escrever "Valores nao aceitos".

let A = -23074;
let B = 29382;
let C = 18082;
let D = 16030;
 
let somaCD = C + D;
let somaAB = A + B;

let Par = A % 2;

if(B > C && D > A && somaCD > somaAB && C > 0 && D > 0 && Par ==0){
    console.log("Valores Aceitos");
}else {
    console.log("Valores nao aceitos");
}