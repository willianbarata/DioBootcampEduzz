//hoisting de variável
function fn(){
    console.log(text); // não dará erro mas exibirá como undefined

    var text = 'olá mundo';

    console.log(text);
}
fn();

/*
    function fn(){
        var text;

        text = 'Exemplo';

        console.log(text);
    }
*/