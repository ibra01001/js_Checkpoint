
let NormalString = "Hello im ibrahim";

// Count : Method 01
function count(NormalString) {
    OnlyChar = NormalString.replace(/\s+/g, '')
    console.log('Count = ', OnlyChar.length)
}
count(NormalString)


// Count :  Method 02 
function count(NormalString) {
    for (i in NormalString) {
    }
    console.log('Count = ', i - 1)
}
count(NormalString)

// Revers
function revers(NormalString) {
    let ReversedString = ""
    for (i of NormalString) {

        ReversedString = i + ReversedString
    }
    console.log('Revers : ' + ReversedString)
}
revers(NormalString)

// Capitalize
function capitalize(NormalString) {
    let BigWord = NormalString.toUpperCase();
    console.log('Capitalize : ' + BigWord)
}
capitalize(NormalString)


// Max Min Values, Method 01: With Two Conditions
let Numbers = [4, 9, 6, 1, 4, 5];

function MinMax(Numbers) {
    min = Numbers[0]
    max = Numbers[0]
    for (i = 1; i < Numbers.length; i++) {
        if (min >= Numbers[i]) {
            min = Numbers[i]
        }
        if (max <= Numbers[i]) {
            max = Numbers[i]
        }
    }
    console.log('Min using two conditions = ', min)
    console.log('Max using two conditions = ', max)
}
MinMax(Numbers)

// Max Min Values, Method 02: using One Condition
function MinMax2(Numbers) {
    let min = Numbers[0];
    let max = Numbers[0];

    for (let i = 1; i < Numbers.length; i++) {
        if (Numbers[i] < min) {
            min = Numbers[i];
        } else if (Numbers[i] > max) {
            max = Numbers[i];
        }
    }

    console.log('Min using one condition = ', min)
    console.log('Max using one condition = ', max)
}

MinMax2(Numbers);

// Max Min Values, Method 03: using single condition expression
function MinMax3(Numbers) {
    let min = Numbers[0];
    let max = Numbers[0];

    for (let i = 1; i < Numbers.length; i++) {
        if (Numbers[i] < min || Numbers[i] > max) {
            min = Numbers[i] < min ? Numbers[i] : min;
            max = Numbers[i] > max ? Numbers[i] : max;
        }
    }

    console.log('Min using single condition expression = ', min)
    console.log('Max using single condition expression = ', max)
}

MinMax3(Numbers);

function Sum(Numbers) {

    sum = 0

    for (i = 0; i < Numbers.length; i++) {
        sum = Numbers[i] + sum

    }


    console.log('the sum is :', sum)
}
Sum(Numbers)


// filter
Number_2 = [-1, 0, 2, 3, 3, 5, 6, 7, 8, 9, 10, 12, -13, -4]

function filter(Numbers2) {

    odds = []
    evens = []

    for (i = 0; i < Number_2.length; i++) {
        if (Numbers2[i] % 2 === -1 || Numbers2[i] % 2 === 1) {
            odds.push(Numbers2[i])

        } else {
            evens.push(Numbers2[i])
        }

    }
    console.log(odds, evens)

}


filter(Number_2)

// factorial 

let Number_3 = 0
FactorialNumber = 0
finale = 1
function factorial(Number_3) {

    if (Number_3 >= 0) {
        for (i = 0; i <= Number_3 - 1; i++) { 

            FactorialNumber = Number_3 - i
            finale = FactorialNumber * finale

        }

        console.log(i)
    }
    console.log(FactorialNumber)
    console.log('factorial number of ', Number_3, ': ', finale)
}
factorial(Number_3)

// prime number 

Number_4 = 19

result = ''
TestingArray = []
const checking = (Number_4) => {
    for (i = 1; i <= Number_4; i++) {

        prime = 0
        prime = Number_4 / i

        if (prime % 1 === 0) { //check how many natural number 
            TestingArray.push('natural number') // make an array and add a string every time there is a natural number 
            if (TestingArray.length === 2) { // counting how many string in the array if there is more than two its not a prime number 

                result = ('the number :'.Number_4, 'is a prime number')
            } else {
                result = ('the number :'.Number_4, 'is not a prime number')
            }

        }


    }
    console.log(result)
    


}
checking(Number_4)