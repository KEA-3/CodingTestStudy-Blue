let input = require('fs').readFileSync("/dev/stdin").toString().split("\n");

const result = [];
const arr1 = input[1].split(" ");
const arr2 = input[3].split(" ");

const sk_card = arr1.map(Number).sort((a,b) => a-b);
const card_list = arr2.map(Number); 

for(let card of card_list){
    result.push(binarySearch(sk_card, card));
}

console.log(result.join(" "));

function binarySearch(arr, value){
    let low = 0;
    let high = arr.length-1;
    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        if (arr[mid] > value)
            high = mid - 1;
        else if (arr[mid] < value)
            low = mid + 1;
        else
            return 1;
    }
    return 0;
}