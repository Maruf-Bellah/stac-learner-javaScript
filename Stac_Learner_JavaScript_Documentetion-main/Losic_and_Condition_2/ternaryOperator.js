// ternary operator হলো if এর কোড কে সংক্ষিপ্ত করে বা এক লাইনে লেখা ভিন্ন উপায় লেখা হয় 

var n = 50;

var str = '';

if( n % 2 == 0){
    str = 'EVEN'
}else{
    str = 'ODD'
}

console.log(str);


var result = n % 2 == 0 ? 'EVEN' : 'ODD';
console.log(result);

var age = 20;
var maruf = age == 20 ? 'big' : 'small';
console.log(maruf);


// condition ? true side : false side 