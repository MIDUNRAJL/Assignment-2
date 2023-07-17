let arr = [100, 20, 31, 150, 39, 72]
let min = arr[0]
let max = arr[0]
for(let i=0; i<arr.length;i++)
if(arr[i]>max){
    max = arr[i]

}
else if(arr[i]<min){
    min = arr[i]
}
console.log(max)
console.log(min)