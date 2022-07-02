// Initialize the address obj in the "addressobj.js" file using factory and constructor functions

//Using factory functions
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

const showAddress = createAddress('a', 'b', 'c')
console.log(showAddress)

//Using Constructor functions
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

const newAddress = new Address(4, 5, 6)
console.log(newAddress.street)