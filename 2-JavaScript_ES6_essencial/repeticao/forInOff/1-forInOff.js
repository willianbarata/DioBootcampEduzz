let arr = [3, 4, 5, 6, 7]

arr.foo = "hello";

for(let i in arr){
    console.log(i);
}

for(let i of arr){
    console.log(i);
}