// A function that shows the prime numbers btw 2 and the limit given
// in the first code we used a nested loop

/*
function showPrime(limit) {
    for (let number = 2; number <= limit; number++) {
        let prime = true
        for (let factor = 2; factor <= Math.sqrt(number); factor++) {
            if (number % factor === 0) {
                prime =false
                break
            }
        }
        if (prime) console.log(number)
    }

}

*/
// in this second code below we split into two functions. One to check if its a prime and another to show prime
showPrime(50)

function showPrime(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number)
}

function isPrime(number) {
    for (let factor = 2; factor <= Math.sqrt(number); factor++)
        if (number % factor === 0) return false
    return true
}

//when you have nested loops its is most likely an indication that you can extract the inner logic and make it
// into a function like this above.