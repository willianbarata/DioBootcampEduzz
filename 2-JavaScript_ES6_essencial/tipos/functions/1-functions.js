function fn(){
    return 'Retornando função tradicional'
}

const arrowFn = () => 'Arrow Funcion';
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Código aqui';
}

//funções também são objetos 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValues = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
//handleFnExecution(); //Não executará a função nf

//controlFnExec como função
function controlFnExec1(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}