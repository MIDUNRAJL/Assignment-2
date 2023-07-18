let input1 = "appy"
let input2 = "happy"

function checkAnagrams(string1, string2){
    let a1 = string1.split("")
    let a2 = string2.split("")

    if(a1.length !== a2.length) {
    return false;
    }

    let b1 = a1.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})
    let b2 = a2.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})

    for (let a in b1) {
        if(!a2.includes(a)) {
            return false
        }
        if(!b1[a]== b2[a]) {
        return false}
        else {
            return true
    }  
}     
    
}

console.log(checkAnagrams(input1,input2))