let input = BigInt(require('fs').readFileSync("/dev/stdin").toString());

function solution(input){
    let start = 2n;
    let end = input;
    while(start <= end){        
        let mid = (start + end) / 2n;
        if(mid * mid > input){
            end = mid - 1n;
        }else if(mid * mid < input){
            start = mid + 1n;
        }else{
            return mid;
        }
    }
}

console.log(Number(solution(input).toString()));
