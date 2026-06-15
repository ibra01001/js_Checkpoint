/*
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
*/

// Max Min Values, Method 01: With Two Conditions
let Numbers = [4, 9, 6, 1, 4, 5];

function MinMax(Numbers){
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

function Sum(Numbers){
    
    sum = 0

for ( i = 0; i< Numbers.length; i++){
  sum = Numbers[i] + sum
  
} 
    

console.log('the sum is :',sum)
}
Sum(Numbers)


// filter
let Number_2 = [0,1,2,3,3,5,6,7,8,9,10,11,12,13]

function filter(Numbers2){
        
        filtered = []
        for(i = 0 ; i < Number_2.length; i++){
            if(i % 2 === 0){
                console.log('hhhh',Number_2[i])
            }else{
                console.log(Number_2[i])
            }
        }
    
}
filter(Number_2)

