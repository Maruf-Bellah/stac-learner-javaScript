var a ='I am';
var b = 'Maruf Bellah';

var c = a.concat( ' ' +b); //concat এটা জোড়া লাগায় কোন লেখার সাথে 
var d = c.substring(1, 6); //substring কোন stringএর শুরু এবং শেষ পর্যন্ত দেখায় আর শেষ এর নাম্বার না দিলে যেখানে থেকে শুরু থেকে শেষ পর্যন্ত দেখায় 

console.log(c.charAt(3)); // charAt() /at() এটা string এর প্রথম/নাম্বার দিয়ে যে কোন  character বের করে দেয় , এখানে substring এর মত দুইটা সংখ্যা লেখা যাবে না একটা লেখতে হবে 

// console.log(c.startsWith('I ')); 
// console.log(c.endsWith('Maruf Bellah'));



var str = 'Maruf bellah '
console.log(str.toUpperCase()); // toUpperCase() লেখাগুলিকে বড় হাতের করে দেয় 
console.log(str.toLowerCase()); // toLowerCase() লেখাগুলিকে ছোট হাতের করে দেয় 
console.log('           hello i am a pucka developer'.trim()); //trim() ফাকা জায়গা গুলি  কেটে দেয় 
console.log(str.split(' ')); // split() array এর মত করে শব্দ গুলো ভাগ ভাগ করে দেয় 