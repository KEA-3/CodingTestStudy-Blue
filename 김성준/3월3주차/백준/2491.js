let input = require('fs').readFileSync("/dev/stdin").toString().split("\n")[1];

const arr = input.split(" ").map(Number);

let up = 1;
let down = 1;
let max = 1;

for(let i = 1; i<arr.length; i++){
    if(arr[i-1] < arr[i]){
        up++;
        down = 1;
    }else if(arr[i-1] > arr[i]){
        down++;
        up = 1;
    }else{
        up++;
        down++;
    }

    max = Math.max(max, up, down);
}

console.log(max);