function soma(a: number, b: number){
    return a + b;
}

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
   // executarRugido(alturaEmDecibeis: number): void;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

type IDomestico = IFelino | ICanino;
//type IDomestico = IFelino & ICanino;

const domestico: IDomestico = {
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true    
}



const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre",
   // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} Db`)
}

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//Generic types
function adicionandoApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}

adicionandoApendiceALista([1,2,3], 1);
adicionandoApendiceALista(['1','2','3'], '1');

//condicionais a partir de parâmetros
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'Gerente' | 'Coordenador' | 'Supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redireciono de acordo com o cargo
    }
    //redireciono usuario
}


interface Dog {
    nome: string;
    idade: number;
    parque?: string;
}

type DogSomenteLeitura = {
    +readonly [K in keyof Dog]-?: Dog[K];
}

class meuDog implements Dog {

nome;
idade;
parque?: string;

    constructor(nome,idade,parque){
        this.nome = nome;
        this.idade = idade;
        this.parque = parque;
    }
}
