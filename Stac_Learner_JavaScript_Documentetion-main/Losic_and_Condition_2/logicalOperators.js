/* Logical Operators only used when we have tow or more conditions and result comes from both of their Participation  */
/* 
লজিক্যাল অপারেটরগুলি শুধুমাত্র তখনই ব্যবহার করা হয় যখন আমাদের দুটি বা ততোধিক শর্ত থাকে এবং ফলাফল তাদের উভয়ের অংশগ্রহণ থেকে আসে */


// && || ! 


/* 
// A && B 

true && true = true 
true && false = false
false && true = false
false && false = false


&& এবং বুজায় ==  এই চিহ্ন দ্বারা দুই টাই সত্যি হতে হবে  */


/* 
// A || অথবা B 

true && true = true 
true && false = true
false && true = true
false && false = false


&& অথবা বুজায় ==  এই চিহ্ন দ্বারা দুই টার যে কোন একটা সত্যি হতে হবে  */

var a = 10;
var b = 20;
var c = 30;
var d = 40;


if(a > b && c > d ){
    console.log('A is greater then B or C is greater then D');
}else{
    console.log('At least On value False ');
}


if(a > b  || c > d ){
    console.log('A is greater then B or C is greater then D');
}else{
    console.log('At least On value False ');
}


var check = !!(a > b);
console.log(check);