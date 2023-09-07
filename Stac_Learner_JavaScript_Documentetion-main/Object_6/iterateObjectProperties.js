// iterate মানে বারবার করা / পুনরাবিত্তি করা / লুপ করা 

var obj = {
    x: 40,
    y: 30,
    z: 10
}
/* 
// in oparetor টা হলো এর মধ্যে আছে কি নেই 

console.log('x' in obj);
console.log('m' in obj); //  না থাকলে false দেখাবে 

*/

for(var i  in obj){
    // console.log(i);
    console.log(i + ' : '  + obj[i]);
}