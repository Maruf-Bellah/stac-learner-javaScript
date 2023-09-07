// sing / dubble contetion এর মধ্যে text দিয়ে যদি কোন এক variable মধ্যে assing করা হয় তাহলে তাকে string বলে 


var str = 'Something'; // somethin এটা কে বলে literal 
var str2 = String('maruf bellah') //এটা কে বলে string constructor
 
console.log(str2);


var n = 10;
var str5 = n + ' ' //যে কোন নাম্বার কে যদি plass sing দিয়ে concat করা হয় তাহলে সেটা string হয়ে যায় 
var str6 = n.toString();
var str3 = String(n);
console.log(str3);