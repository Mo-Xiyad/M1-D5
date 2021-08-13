const separatorWithHEading = function (heading) {
    console.log(`\n\n<---------------->  ${heading}  <---------------->\n`)
}

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

// /*
separatorWithHEading('EXERCISE 11')
let giveMeRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const checkArray = function (giveMeRandom) {
    for (let i = 0; i < giveMeRandom.length; i++) {
        if (giveMeRandom[i] > 5) {
            console.log(`Your number ${giveMeRandom[i]} is bigger than 5`)
        }
    }
}

checkArray(giveMeRandom)
// */

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

separatorWithHEading('EXERCISE 12')

let shoppingCart = [
    { name: 'iphone', price: 100, id: 10, quantity: 2 },
    { name: 'android', price: 205, id: 20, quantity: 5 },
    { name: 'glaxy', price: 124, id: 55, quantity: 21 },
    { name: 'plane', price: 15415, id: 98, quantity: 24 },
]

const shippingCartTotal = function (shoppingCart) {
    total = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i]['price']
    }
    return total
}

console.log(`Your total price is`, shippingCartTotal(shoppingCart))


/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

separatorWithHEading('EXERCISE 13')


const addToShoppingCart = function (name, price, id, quantity) {
    let addNewItem = {}
    addNewItem.name = name
    addNewItem.price = price
    addNewItem.id = id
    addNewItem.quantity = quantity
    shoppingCart.push(addNewItem)
    return console.log(`New item has been added to your cart`, shoppingCart)
}

addToShoppingCart('car', 500, 25, 2)


/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

separatorWithHEading('EXERCISE 14')

const maxShoppingCart = function (shoppingCart) {
    let mostExpensiveItem = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        // code goes here
    }
    return mostExpensiveItem
}

console.log(maxShoppingCart(shoppingCart))