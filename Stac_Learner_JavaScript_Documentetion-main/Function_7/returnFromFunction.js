function addAll(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum; // যতক্ষন পর্যন্ত রিটার্ন করবে না ততক্ষন পর্যন্ত বাহিরে value  যাবে না 
}

var a = addAll(45, 96);
var b = addAll(45, 196);

// console.log(a, b);



function person(name, email){
    return{
        name: name,
        email: email
    }
}

var pi = person('Maruf Bellah', 'mdmaruf5511507@gmail.com');
console.log(pi);