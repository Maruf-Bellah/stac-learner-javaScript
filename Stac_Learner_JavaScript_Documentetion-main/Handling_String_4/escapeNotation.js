// Escape Notation কোন লেখাকে string এর মধ্যে escape (পলায়ন) করে রাখা 

var str = 'This is a \' string\''; //এটাকে বলে escape carecter / escape sequenc 
var str2 = 'This is a \t string'; //একটা tab এর জায়গা দিবে 
var str3 = 'This is a \n string'; //একটা নতুন লাইন এ দিবে 
var str3 = 'This is a \\ string'; //একটা back slase দিবে 
console.log(str);
console.log(str2);
console.log(str3);