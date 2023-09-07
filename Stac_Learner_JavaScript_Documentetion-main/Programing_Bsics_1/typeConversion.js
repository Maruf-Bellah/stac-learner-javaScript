// type conversion মানে হলো যখন আমরা একটা ডাটা থেকে অন্য ডাটায় চলে যাই তখন তাকে বলে type conversion 
var str = '100';
var number = 10;

var numberToString = number.toString();
// console.log(numberToString);

var total = str * number;


var sum = parseInt(str) + number;
// console.log(sum);
// var total = str + number; যোগের সময় কাজ করে না কারণ যোগের সময় সেটা string ভেবে জোড়া লাগায় দেয় 
/* console.log(Number(Infinity));
console.log(Infinity.toString());
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
 */
// Falsy value 
''
0
null
undefined
NaN 

console.log(Boolean('')); //false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(87)) // true

console.log(true);
var booleanToString = true;
console.log(booleanToString.toString());


// এই সব ভ্যালু truty বা false না , তবে আমাদের compiler false ধরবে

// String , Number, Boolean  সব গুলি বড় হাতের হবে 