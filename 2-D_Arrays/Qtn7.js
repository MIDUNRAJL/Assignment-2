let arr = [[1,2,3],[4,5,6],[7,8,9]]
let sum1 = 0;
let sum2 = 0;
for(let i=0;i<arr.length;i++){
    sum1 = sum1 + arr[i][i]
}
for(let j=0;j<arr.length;j++){
    let len = (arr[j].length-j-1)
    sum2 = sum2 + arr[j][len]
}
console.log(sum1)
console.log(sum2)
console.log(sum1 - sum2)