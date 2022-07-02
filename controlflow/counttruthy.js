// Q : Function that check an array and counts the truthy values in the array

function countTruthy(array) {
    let count = 0
    for (let k of array) {
        if (k) count++
    }
    return count

}

const arr = [1, 0, 2, null, undefined, 6, 3]
console.log(countTruthy(arr))
