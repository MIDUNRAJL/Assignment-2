let arr = ["assignment", "problem", "media", "upload"]
let empty_arr = [];
for(let i=0; i<arr.length;i++){
    if(arr[i][0]=='a' || arr[i][arr[i].length-1]=='a')
    {
        empty_arr.push(arr[i]);
      
    }    
}
console.log(empty_arr)