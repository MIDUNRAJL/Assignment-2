let arr = ["HTML", "CSS", "JAVA", "JS"]
let empty_arry = ""
for(let i=0;i<arr.length;i++){
    empty_arry += arr[i];
    if([i]!=arr.length-1){
        empty_arry += ',';
    }
}
console.log(empty_arry)
