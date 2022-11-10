// Write your code below

let palindromCheck = word =>{
    let chars = word.split("")

    for(i=0;i<chars.length;i++){
        if(chars[i] != chars[chars.length-i-1]){
            return('false')
        }
    } 
    return('true')
}

console.log(palindromCheck('noon'))
console.log(palindromCheck('a'))
console.log(palindromCheck('Racecar'))

// let word = 'Racecar'
// let chars = word.split("")
// console.log(chars)
// console.log(chars[0])
// console.log(chars[chars.length-1])