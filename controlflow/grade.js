//function that takes an array of scores and returns the grade for the average of the scores 

function calculateAverage(anarray) {
    let total = 0
    for (let k of anarray) total += k
    return (total / anarray.length)
}

function calculateGrade(marks) {
    const average = calculateAverage(marks)

    if (average < 60) return 'F'
    if (average < 70) return 'D'
    if (average < 80) return 'C'
    if (average < 90) return 'B'
    return 'A'
}

console.log(calculateGrade([80, 82, 83, 84, 85]))