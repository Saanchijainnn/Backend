/*To use the promise-based APIs:
 hum isko use nhi karenge 
const fs = require('node:fs/promises'); */


//To use the callback and sync APIs:
/*humne fs module ko apne node js se bahar nikala h aur apne const m store kar liya h  */
const fs = require('fs');

/*
Hume kya kya padhna h 
-writefile
-appendfile
-copyfile
-rename
-unlink
 */

//fs.writeFile(file, data[, options], callback)
/*file: file ka naaam in double quotes or single quotes
data: what you want to enter
options: optional h but is related to dta kyuki comma options k bracket k andar h 
callback: function h 
 
fs.writeFile("hey.txt","hey kaise ho",function(err){
    if(err) console.log(err);
    else console.log("done")
})*/

/*kaam ki baat: tune tere doc ka console khola par nhi node m kaam kar rahe h to node ka environment m check karna h jo h apna terminal usme type kar node and fiile name  */


//fs.appendFile(path, data[, options], callback)
/*fs.appendFile("hey.txt"," tum sab",function(err){
    if(err) console.log(err);
    else console.log("done")
})*/


//fs.rename(oldPath, newPath, callback)
/*fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.log(err);
    else console.log("done") 
    })*/


//   fs.copyFile(src, dest[, mode], callback)
/*
src: source kya use kar rahe h 
dest:jaha copy save karni h 
callback:function  
fs.copyFile("hello.txt","./copy/copy.txt",function(err){
    if(err) console.error(err);
    else console.log ("done")
})*/

//fs.unlink(path, callback)
/*this basically removes the file 
fs.unlink("hello.txt",function(err){
    if(err)console.error(err);
    else console.log("removed")
})*/


//fs.rmdir(path[, options], callback)
/*ye apko blank folder hi hatane dega*/
 