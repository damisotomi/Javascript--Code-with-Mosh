// Q: Question that checks the speed of a car against the speed limit and gives a point for every 
// 5 km above the speed limit

let speedLimit = 70;
let kmPerPoint = 5;

console.log(checkSpeed(130))

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoint) return ('ok')
    else {
        const point = Math.floor((speed - speedLimit) / kmPerPoint)
        if (point >= 12) return ('Licence suspended')
        else return (`Point: ${point}`)
    }

}

