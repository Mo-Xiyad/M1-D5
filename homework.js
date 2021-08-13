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
    { price: 100, name: 'iphone', id: 10, quantity: 2 },
    { price: 205, name: 'android', id: 20, quantity: 5 },
    { price: 124, name: 'glaxy', id: 55, quantity: 21 }
]

const shippingCartTotal = function (shoppingCart) {
    total = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i]['price']
    }
    return total
}

console.log(`Your total price is`, shippingCartTotal(shoppingCart))