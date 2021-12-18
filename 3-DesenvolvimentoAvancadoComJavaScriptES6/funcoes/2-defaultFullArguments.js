function multiply(a,b){
    b = b || 1;
    b = typeof b === 'undefined' ? 1 : b;
    return a*b;
}


//Atribuindo valor padrao, quando deixar de passar um parâmetro
function multiply(a,b = 1){
    return a*b;
}

