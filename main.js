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

// max value and min value
const Numbers = [0, 1, 6, 3, 4, 5];

function Values(Numbers){
    
    let min = null
    for (i = 0; i >= Numbers.length; i++) {
        for (j = 0; j > Numbers.length; j++) {
            if (j > Numbers[i]) {
              console.log("yes") 
               
            }else 
                console.log("no")


        }
    }
    console.log(Numbers[2])
}
Values(Numbers)