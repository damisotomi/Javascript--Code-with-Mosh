// Function that takes a number as a limit and prints out an even/odd message for each number from 0 to the limit

// function showNumber(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(i, 'EVEN')
//         else console.log(i, "ODD")
//     }
// }

showNumber(7)

// another way to write this will be

function showNumber(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'ODD'
        console.log(i, message)
    }
}
