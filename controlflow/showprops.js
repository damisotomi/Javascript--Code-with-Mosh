//function that shows properties of an object that carry string values
const movies = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

function showProperties(anyobject) {
    for (let key in anyobject) {
        if (typeof (anyobject[key]) === 'string') {
            console.log(key, anyobject[key])
        }
    }
};

showProperties(movies)