function getNome(){
    return 'Willian';
}

function logFn(fn){
    console.log(fn);
}

const logFnResult = logFn;

logFnResult(getNome());

logFn(getNome());