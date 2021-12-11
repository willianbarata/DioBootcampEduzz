const nome = 'Willian';

//Não podemos alterar o valor
//nome = 'Willian';

const user = {
    nome: 'Willian'
}

//Mas se for um objeto, podemos trocar suas propriedades
user.nome = 'Outro nome qualquer';

//Não podemos fazer o objeto "apontar" para outro lugar
//    user = {
//        nome: 'Willian'
//    };

const persons = ['Willian', 'Pedro', 'João'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover um item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\n Array após as alterações' , persons);
