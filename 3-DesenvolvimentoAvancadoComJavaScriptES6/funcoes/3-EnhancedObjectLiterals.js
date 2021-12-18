//exemplo 1
var prop1 = "Willian"

var obj ={
    prop1
};

console.log(obj);

//exemplo 2
function method1(){
    console.log('teste');
}

var obj1 = {
    method1
};

obj1.method1();


//exemplo 3
var obj3 = {
    sum(a,b){
        return a+b;
    }
};

console.log(obj3.sum(5,5));

//exemplo 4

var propNome = 'teste';
var obj = {};

obj[propNome] = 'prop value';
console.log(obj);

//melhoria ecma6
var propNome1 = 'teste1';

var obj5 = {
    [propNome1] : 'propnome'
};

console.log(obj5);

