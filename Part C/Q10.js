// q10

const c = counter();
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}


console.log(c());
console.log(c());
console.log(c());





