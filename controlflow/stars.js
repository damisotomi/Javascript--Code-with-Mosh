// function that prints a pattern of stars based on the row number given to it

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let patterns = ''
        for (let i = 1; i <= row; i++) patterns += '*'
        console.log(patterns)
    }

}

showStars(5)