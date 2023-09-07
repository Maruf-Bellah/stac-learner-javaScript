/* var a = 'abc';

function x(){
    var a = 'maruf';
    function y(){
        // var a = 20;
        console.log(a);
    }
    console.log(a);
    y()
}
x() */


function test(n){
    function a(){
        return n%3 === 0;
    }
    function b(){
        return n%5 === 0;
    }
    if(a() && b()){
        console.log(n + ' ' + 'Is divisible by both 3 and 5');
    }else{
        console.log('Not a valid number');
    }
}

test(18)