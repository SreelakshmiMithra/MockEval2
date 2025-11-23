//1. 
let nums = [10, 3, 7, 20, 13, 2];

let squares = nums.map(num=>num*num);
console.log(squares);

//2.
let nums = [10, 3, 7, 20, 13, 2];
function isPrime(num){
    if(num<=1)
         return false;
    for(let i =2;i<=Math.sqrt(num);i++){
        if(num % i ===0)
            return false;

    }
    return true;
}
let primes=nums.filter(isPrime);

console.log(primes);

//3.
let nums = [10, 3, 7, 20, 13, 2];

let sum =nums.reduce((acc,num)=>acc+num,0)
console.log(sum);

//4.
let nums = [10, 3, 7, 20, 13, 2];

let descending = [...nums].sort((a,b)=>b-a);
console.log(descending);


