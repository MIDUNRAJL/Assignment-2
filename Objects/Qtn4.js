let arr = [10,20,30,10,40,-2]
let obj = {};
for(let i=0;i<arr.length;i++){
    temp = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j])
        temp++;
    }
    obj[arr[i]] = temp;
    if(temp==1)
    console.log(arr[i])
}
