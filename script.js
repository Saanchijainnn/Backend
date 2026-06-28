// fundamentals of js
//arrays and objects
//function return
//async js coding
//for each,map ,filter,find,indexOf

/*var arr = [1,2,3,4]

forEach
arr.forEach(function(val){
   console.log (val+" "+ "hello");
})

map: map aapko ek aur array dega usme unte hi members honge jitne isme h. foeeach ki tarah chalta h par vo ek naya array deta h forech nhi deta 

var ans=arr.map(function(val){
    return val *3;
})

console.log(ans)


filter:  hume isse aisa array milta h jo existung arrays e chota ho sakta h ya use barabar ho sakta h 

var ans = arr.filter(function(val){
    if(val > 3){return true;}
    else return false;
})
console.log(ans)


find: iisse dhoodhte h, aur jo sabse pehle hoga vhi return ho jaayega 

var ans= arr.find(function(val){
    if(val === 2)return val;
})
console.log(ans)

indexOf: jo banda hoga uska index dega nahi to -1 print hoga 
console.log(arr.indexOf(4))*/


/*{}: blank object, ye ek key value pair hota h, left side m key hogi aur right side m value hogi hamesha { a: 12}

two ways to search
var obj={
    name: "saanchi"
}
obj.name, obj[name]*

Object.freeze(obj): ab hium value change nhi kar sakte */

/*this give the length of function because at the end a function is an object and the length of function is the number of parameters in it 
function abcd(a,b,c){};
console.log(abcd.length)*/


// async js coding 
/*line by line code chale use kehte h synchronous, jo bhi code async nature ka use side stack m bhejdo aur us code ko chalao jo sync nature ka ho aur jab poora synvc code chal jaaye to check karo side stack wla async code chla ya nhi agr vo chal gaya h to use main stack m le aao */


/*async function abcd(){
 var blob = await fetch (`https://randomuser.me/api/`);
 var ans = await blob.json();
 console.log(ans);

}

abcd()*/
