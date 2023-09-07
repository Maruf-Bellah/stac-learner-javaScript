

function test(a, b , c){
    
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
    // console.log(JSON.stringify(arguments));
    // console.log(arguments);
}
// test(10, 20, 50)


// vinno vinno argumeter valuer er jog 

function sumAll(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

sumAll(45, 6);
sumAll(45,  9);
sumAll(45, 19);