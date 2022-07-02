//function that takes a number and prints out fizzbuzz if it is divisibles by 3 or 5
// prints out fizz if divisible by only 3
// prints out 5 if divisisble by only 5

function fizzBuzz(number) {
    if (typeof number !== 'number') return NaN
    else if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
    else if (number % 3 === 0) return 'fizz'
    else if (number % 5 === 0) return 'buzz'
    return number
}

const output = fizzBuzz(true)
console.log(output)