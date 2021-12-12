const users = ['Willian', 'Maria', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Willian',
        age: 31,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 35,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 24,
        gender: gender.WOMAN
    },
    
]

//Retornar a quantidade de itens de um array
console.log('Itens', persons.length);

//Verifica se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Iterar os itens do Array
persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name} index: ${index} `, arr);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\n Nova lista apeans com homens', mens);
//retorna um novo 
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\n Pessoas com a adição do course:', personWithCourse );

//transforma um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idade das pessoas', totalAge);

//Juntando as operações 
const totalEvenAges = persons
                        .filter(person => person.age % 2 ===0)
                        .reduce((age, person)=>{
                            age += person.age;
                            return age;
                        }, 0);

console.log('\n Soma de idades das pessoas que possuem idade par', totalEvenAges);                        