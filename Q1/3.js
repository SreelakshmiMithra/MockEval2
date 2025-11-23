function sumAll(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr, 0);

}
console.log(sumAll(1,2,3,4));