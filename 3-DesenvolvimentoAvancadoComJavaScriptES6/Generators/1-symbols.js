const uniqueId = Symbol('Olá');
const uniqueId2 = Symbol('Olá');
console.log(uniqueId);
console.log(uniqueId === uniqueId2);
//Um symbol nunca é igual ao outro, ele é um identificador único


const obj = { 
    [uniqueId]: 'oi'
};

console.log(obj);

console.log(Object.keys(obj));

console.log(Object.getOwnPropertySymbols(obj));

//Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

//adicionando meta propriedades ao objeto
//const obj2 = {
//    [Symbol.iterator]()
//};

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

while(true){
    let {value, done} = it.next();

    console.log(done);
    if(done){
        break;
    }
    console.log(value);
}

//com ecma6
for(let value of arr){
    console.log(value);
}

const str = 'Willian Fernando';

for(let value of str){
    console.log(value);
}

const unindo = [...arr, str];

for(let value of unindo){
    console.log(value);
}

const obj3 = {
    values: [1,2,3,4], 
    [Symbol.iterator](){
        let i = 0; 
        return { 
            next: () => {
                i++;
                return{
                    value: this.values[i - 1],
                    done : i > this.values.length
                };
            }
        };
    }
};

const it1 = obj3[Symbol.iterator]();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());