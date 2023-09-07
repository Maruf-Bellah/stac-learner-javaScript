// variable এর মধ্যে যে function রাখা যায় তাকে বলে function expression 

// যেহেতু প্রথম variable এর নাম কল করলেই function কাজ করছে তখন আর function এর নাম প্রয়োজন হয় না , তখন function এর নাম কেটে দিলে ও কাজ করবে 
// var addition = function add(a, b){
//     return a + b;
// }
// var see = addition(5 , 6)

// console.log(see);

// যে function এর নাম থাকে না তাকে annonimus function বলে আর এর মাধ্যমে আমরা function exrission ব্যবহার করছি 
var addition2 = function(a, b){
    return a + b;
}
 addition2();

var anoter = addition2
console.log(anoter(56,9));



// setTimeout একটা নির্দিষ্ট টাইমের পর রান হয় , 
setTimeout(function (){
    console.log('i will came after 5 second');
}, 5000)