/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
let giveMeRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const checkArray = function (giveMeRandom) {
    for (let i = 0; i < giveMeRandom.length; i++) {
        if (giveMeRandom[i] > 5) {
            console.log(`Your number ${giveMeRandom[i]} is bigger than 5`)
        }
    }
}

checkArray(giveMeRandom)