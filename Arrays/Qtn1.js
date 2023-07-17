let str = "madam";
let len = str.length;
let temp = 0;
for(let i=0; i<len; i++){
    if(str[i]!=str[len-i-1]){
    temp = 1;
    }
}
if(temp==0){
    console.log("palindrome")
}
else{
    console.log("Not palindrome")
}