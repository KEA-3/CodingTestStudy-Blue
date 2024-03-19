let input = require('fs').readFileSync("/dev/stdin").toString().split("\n")[1];

const arr = input.split(" ").map(Number).sort((a,b) => a-b);
const a = [];

let result = 0;

for(let i = 0; i<arr.length; i++){
    result = result + arr[i];
    a.push(result);
}

result = 0;
for(let i = 0; i<a.length; i++){
    result += a[i];    
}

console.log(result);