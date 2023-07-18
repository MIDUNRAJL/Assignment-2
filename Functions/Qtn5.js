function averageArray(arr){
    if(arr.length == 0){
        return 0
    }

    let total = 0;
    for(let i=0;i<arr.length;i++){
        total = total + arr[i];
    }
    return total / arr.length;

}
var a = [2,3,4,5]
console.log(averageArray(a))