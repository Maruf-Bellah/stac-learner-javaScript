var arr = [4, 5, 6, 7, 8 , 9];
var arr2 = [9, 10, 11, 12, 13, 14, 15];
// console.log(arr);

/* var arr3 = arr.concat(arr2) //concat() দিয়ে ২ array কে মিলানো যায় 
console.log(arr3); */

// console.log(arr.join(' , |')); //join() এটা দিয়ে array এর মধ্যে ফাকা / কমা আরো অনেক কিছু add করা যায় 

// console.log(arr.fill( ' hello '));  এই fill() দিয়ে array এর text গুলি কে বদল করা যায় নিজের মত করে 

Array.isArray(arr) // এটা কি array কিনা সেটা দেখে 
// console.log(Array);

// Array. এটা দিয়ার পর অনেক method আছে সে গুলি শিখতে হবে 

// var arr3 = Array.from(arr); //from টা নতুন আরেকটা array দেয় 
// console.log(arr3);



// এই ভাবে a এর মান পালটে যাচ্ছে 
/* var a = [1, 2]; 
var b = a; 
b[0] = 8;
 */



// তবে যদি এভাবে করেন তাহলে আর পাল্টাবে না 

var a = [1, 2]; 
var b = Array.from(a)
b[0] = 5;

console.log(a);
console.log(b);