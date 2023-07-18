let char = 'inttot'
let charObj = {}
for(let i=0;i<char.length;i++){
    let c = char[i];
    if(charObj[c]){
        charObj[c] += 1
    }
    else{
        charObj[c] = 1
    }
}
console.log(charObj)