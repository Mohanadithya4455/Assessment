//Program to reverse each word in the given sentence
var str=prompt();
var a=str.split(" ");
var ans="";
function f(st){
    return st.split("").reverse().join("");
}
for(var i=0;i<a.length;i++){
    ans+=f(a[i]);
    if(i!=a.length-1){
        ans+=" ";
    }
}
console.log(ans);