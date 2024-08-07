//BASIC PROGRAM

// let a = 123456;
// let b = a.toString(); //converts number into a string
// let c = b.split('');  // "split('')" converts a string into an array (because reverse is an array method!)
// let d = c.reverse();  // reverse() reverses the characters within the array
// let e = d.join('');   // "join('')" converts an array into a string
// console.log(e);

// BUILT A FUNCTION, BECAUSE THE INTERVIEW QUESTION REQUIRED TO

function reverse(number){
    let a = parseInt(number);
    let b = a.toString().split('').reverse().join('');
    console.log(b);
}

reverse(123456);