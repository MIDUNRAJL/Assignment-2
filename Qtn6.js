let str = "I'm learning javascript basics."
let arr = []
let new_str = ""
for(let i=0; i<str.length;i++){
    new_str += str[i];
    if(str[i] == " " || str[i]=='.'){
        arr.push(new_str)
        new_str = ""
    }
}
console.log(arr)