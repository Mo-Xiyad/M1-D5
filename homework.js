const separatorWithHEading = function (heading) {
    console.log(`\n\n<---------------->  ${heading}  <---------------->\n`)
}
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
separatorWithHEading('EXERCISE 1')

const area = function (num1, num2) {
    let totalArea = (num1 * num2) / 2
    return totalArea
}
console.log(area(11, 12))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
separatorWithHEading('EXERCISE 2')

const crazySum = function (num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    }
    return num1 + num2
}

console.log(crazySum(4, 2))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
separatorWithHEading('EXERCISE 3')

const crazyDiff = function (num) {
    if (num > 19) {
        return (num - 19) * 3;
    }
    return (19 - num)
}

console.log(crazyDiff(20))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
separatorWithHEading('EXERCISE 4')

const boundary = function (num) {
    let number = parseInt(num)
    if (!Number.isSafeInteger(num)) {

    };
    if (number >= 20 && number <= 100) {
        console.log(`your number is between 20 and 100`, number)
    } else if (number === 400) {
        console.log(`your number is`, number)
    } else {
        console.log(`your number is ${number}`)
    }
}

boundary('5')


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
separatorWithHEading('EXERCISE 5')

const strivify = function (string) {
    if (string.startsWith('Strive')) {
        return string
    }
    else {
        return 'Strive ' + string
    }
}
console.log(strivify(`in front of the given string`))


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
separatorWithHEading('EXERCISE 6')

const check3and7 = function (num) {
    if (num >= 0) {
        if (num % 3 === 0) {
            return `${num} is a multiple of 3`
        } else if (num % 7 === 0) {
            return `${num} is a multiple of 7`
        } else {
            return `Your input was not a multiple of 3 or 7`
        }
    } else {
        return `Your input was not a positive number`
    }
}
console.log(check3and7(9))



/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

separatorWithHEading('EXERCISE 7')

const reverseString = function (givenString) {
    // option one to do this 
    // return givenString.split("").reverse("").join("");

    // This variable will split the string into new array ---> letter by letter since it is only one word. splitString = "hello".split("");
    let splitString = givenString.split("")

    // this new array will be reversed ["S", "t", "r", "i", "v", "e"].reverse();
    let reverseLetters = splitString.reverse()

    // Using the join() method to join all elements of the array into a string
    // reverseCompleted = ["o", "l", "l", "e", "h"].join("");
    let reverseCompleted = reverseLetters.join("")

    return reverseCompleted
}

console.log(reverseString('Strive'))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

separatorWithHEading('EXERCISE 8')

const upperFirst = function (givenString) {
    // return givenString.charAt(0).toUpperCase() + givenString.slice(1)
    let stringsOfArray = givenString.split(" ")
    let newArray = []

    for (let i = 0; i < stringsOfArray.length; i++) {
        newArray.push(stringsOfArray[i][0].toUpperCase() + stringsOfArray[i].replace(stringsOfArray[i][0], ``))
    }
    return newArray.join(" ")
}

console.log(upperFirst('capitalize the first letter of each word'))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

separatorWithHEading('EXERCISE 9')

const cutString = function (givenString) {
    let arrayOfStrings = givenString.split(" ")
    let newArray = []

    for (let i = 0; i < arrayOfStrings.length; i++) {
        newArray.push(arrayOfStrings[i].slice(1, arrayOfStrings[i].length - 1))
    }

    return newArray.join(" ")

}

// function cutString(str) {
//     return str.slice(1, str.length - 1);
// }

console.log(cutString('without the first and last character'))


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

separatorWithHEading('EXERCISE 10')

const giveMeRandom = function (number) {
    let numberArray = []
    for (let i = 0; i < number; i++) {
        numberArray.push(Math.floor(Math.random() * 10))
    }

    return numberArray
}

console.log(giveMeRandom(10))