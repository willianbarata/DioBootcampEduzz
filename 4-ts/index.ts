function soma(a: number, b: number){
    return a + b;
}

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis} Db`)
}

