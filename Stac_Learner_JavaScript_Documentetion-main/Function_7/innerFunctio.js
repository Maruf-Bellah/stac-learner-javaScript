/* function something(greet, name ){
    function sayHi(){
        console.log(greet, name);
    }
    sayHi()
}

something('Good morning', 'maruf bellah') */

// ekhan theke amra namer prothom index ta nibo 

function something(greet, name ){
    function getFirstName(){
        if(name ){
            return name.split(' ')[0];
        }else{
            return ''; // jodi name na thake tahole khali , undefiner er bodle 
        }

    }
    var message = greet + ' ' + getFirstName();
    console.log(message);
//    return message;
}

// var a = something('Good morning', 'maruf bellah')
// console.log(a);
something('good morning ')