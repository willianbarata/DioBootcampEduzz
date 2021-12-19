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