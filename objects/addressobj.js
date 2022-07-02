// Q: Create an address obj with three properties; street,city, zip code
// Also create a function that takes an address obj and displays all the properties in it along with its values
const address = {
    street: '21 ife oloruntola',
    city: 'Akute',
    zipCode: "100001"
}


function showAddress(address) {
    for (let property in address)
        console.log(property, ":", address[property])
}

showAddress(address)
