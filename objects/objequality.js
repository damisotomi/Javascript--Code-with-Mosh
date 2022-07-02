//Q: Write a function that takes two objects and checks if they are equal(meaning having the same properties) and 
//another function that takes two objects and checks if the are the same(meaning pointing to the same memory location or referencing the same object)

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

const address1 = new Address(4, 6, 6)
const address2 = new Address(4, 5, 6)
const address3 = { ...address2, home: 'akute' }
const address4 = address2

// function to check if two objects have equal properties names
function areEqual(address1, address2) {
    const address1Properties = Object.keys(address1)
    const address2Properties = Object.keys(address2)
    if (address1Properties.length !== address2Properties.length) return false
    else {
        for (let index = 0; index < address1Properties.length; index++) {
            if (address1Properties[index] !== address2Properties[index]) return false
        }
        return true
    }
}

//function to check if two objects are pointing to the same memory locaiton
function areSame(address1, address2) {
    console.log(address1 === address2)
}

areSame(address3, address2)
console.log(areEqual(address1, address3))

//function that takes  the two  address created above and checks if they have the same property values
function sss(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
}

console.log(sss(address1, address2))