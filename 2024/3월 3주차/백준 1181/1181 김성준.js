let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");

const set = new Set(input);
const arr = new Array(...set);

for(let i = 0; i<arr.length; i++){
    if(!isNaN(Number(arr[i]))){
        arr.splice(i,1);
    }
}

arr.sort();

arr.sort((a,b) => {
    return a.length - b.length;
})

console.log(arr.join("\n"));