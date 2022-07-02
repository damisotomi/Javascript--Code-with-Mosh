//function that takes a limit and adds up the sum of the multiples of 3 or 5 from 0 to the limit

function average(limit) {
    let total = 0
    for (let i = 1; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0) total += i
    return (total)
}

console.log(average(10))