console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))

function fizzBuzz (n) {
    const resultadoString = [];
    for (let i = 1; i <= n ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultadoString.push(`FizzBuzz`);
        } else if (i % 3 === 0) {
            resultadoString.push(`Fizz`)
        } else if (i % 5 === 0) {
            resultadoString.push(`Buzz`)
        } else {
           resultadoString.push(`${i}`);
        }
    }
    return resultadoString;
};