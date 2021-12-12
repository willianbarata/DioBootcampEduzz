/*
    if(condition){
        //código
    }else if(condition){
        //código
    }
*/

const array = [1,2,3,4,5,6,7,8]

console.log('\n else if');
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é divisivel por 2`);
    }else if( item % 3 === 0){
        console.log(`O número ${item} é divisivel por 3`);
    }else if( item % 5 === 0){
        console.log(`O número ${item} é divisivel por 5`);
    }
});