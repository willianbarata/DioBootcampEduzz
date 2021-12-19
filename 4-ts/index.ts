function soma(a: number, b: number){
    return a + b;
}

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre"
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true
}