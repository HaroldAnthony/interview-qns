//NORMAL FN

// function f(a,b){
//     const sum = a+b;
//     return sum;
// };

// console.log(f(2,3));

//ANONYMOUS FN

// let f = function(a,b){
//     const sum = a+b;
//     return sum;
// }

// console.log(f(2,3));

//IMMEDIATE INVOKE

// let f = function(a,b){
//     const sum = a+b;
//     return sum;
// }(2,3)

// console.log(f);

//ARROW FN

// let f = (a,b) => {
//     const sum = a+b;
//     return sum;
// }

// console.log(f(2,3));

//function within a function

function fun(){
    function f(a,b){
        const sum = a+b;
        return sum;
    }
    return f;
}

var numsum = fun();
console.log(numsum(2,3));

