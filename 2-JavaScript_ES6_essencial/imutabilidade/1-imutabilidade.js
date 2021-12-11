const user = {
    nome: 'Willian',
    segundoNome: 'Fernando'
};

function getNomeCompleto(){
    return {
        ...user,
        nomeCompleto: `${user.nome} ${user.segundoNome}`
    }
}

const nomeCompleto = getNomeCompleto(user);

console.log(nomeCompleto);