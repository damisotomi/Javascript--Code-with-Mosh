// Q: an array of objects that models the price range buttons from Yelp website using objects


let priceRanges = [
    { label: "$", tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: "$$", tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: "$$$", tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
]

console.log(priceRanges[0].tooltip)
console.log(priceRanges[1].tooltip)
console.log(priceRanges[2].tooltip)