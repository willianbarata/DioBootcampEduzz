function fn(){
    log('Hoisting de função'); //o javascript executa corretamente, mesmo a função possuindo criação após a execução

    function log(value){
        console.log(value);
    }


}

fn();