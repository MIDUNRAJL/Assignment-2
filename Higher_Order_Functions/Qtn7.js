let array_String=["assignment","problem","media","limited"];
let a=array_String.filter((a1)=>
{
    if(a1[0]=='a' || a1[a1.length-1]=='a')
        return a1})
console.log(a)