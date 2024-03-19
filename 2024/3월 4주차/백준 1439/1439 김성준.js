let input = require('fs').readFileSync("/dev/stdin").toString().trim();

const arr = new Array(2).fill(0);

for(let i = 1; i<input.length; i++){
    if(input[i-1] !== input[i]){
        arr[Number(input[i-1])]++;
    }
}

arr[Number(input[input.length -1])]++;

console.log(Math.min(...arr));