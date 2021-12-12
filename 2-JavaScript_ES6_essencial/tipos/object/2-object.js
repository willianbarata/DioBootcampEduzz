const user = {
    name: 'Willian',
    lastName: 'Fernando Barata dos Santos'
}

//recupera as chaves do objeto 
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\n Valores das propriedades do objeto user: ', Object.values(user));

//retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\n Lista de propriedades e valores: ', Object.entries(user));

//margear propriedades de objetos
Object.assign(user, {fullName: 'Willian Fernando Barata dos Santos'});

console.log('\n Adiciona a propriedade fullName no objeto user', user);
console.log('\n Retorna um novo objeto margeando dois ou mais objetos', Object.assign({}, user, {age:26}));

//previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variável newObj após as alterações: ', newObj);

//permite apenas alteração de propriedades existentes em um objeto
const person = {name : 'Willian'};
Object.seal(person);

person.name = 'Willian Barata';
delete person.name;
person.age = 26;

console.log('\n Variável person após as alterações: ', person);