let NormalString = "Hello im ibrahim";

// Count : Method 01
function count(NormalString) {
    OnlyChar = NormalString.replace(/\s+/g,'') 
    console.log('Count = ', OnlyChar.length)
}
count(NormalString)


// Count :  Method 02 
function count(NormalString) {
    for(i in NormalString) {
    }
    console.log('Count = ', i-1)
}
count(NormalString)

// Revers
function revers(NormalString) {
    let ReversedString = ""
    for( i of NormalString){
        
    ReversedString = i + ReversedString
    }
    console.log('Revers : ' + ReversedString)
}
revers(NormalString)

// Capitalize
function capitalize(NormalString){
    let BigWord = NormalString.toUpperCase();
    console.log('Capitalize : ' + BigWord)
}
capitalize(NormalString)