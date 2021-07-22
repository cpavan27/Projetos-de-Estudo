

function fizzBuzz(entrada){
    if (typeof entrada !== "number"){
        console.log("NaN"); 
    }else if (entrada % 3 === 0 && entrada % 5 === 0){
        console.log("FizzBuzz");
    }else if (entrada % 5 === 0){
        console.log("Buzz");
    }else if (entrada % 3 === 0){
        console.log("Fizz");
    }else console.log("Deu não");
};

const resultado = fizzBuzz(7);
