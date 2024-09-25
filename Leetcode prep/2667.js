//2667. Create Hello World Function

//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld(){
    return function inner(){
        return "Hello World";
    };
};

createHelloWorld();