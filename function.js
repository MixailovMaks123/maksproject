// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
    
//     console.log(num);
// }

// showFirstMessage("Привет");
// console.log(num);


// let calc = function (a, b){
//     return(a+b);
// }

// let calc = (a,b) => a+b

// console.log(calc (3,4));

// console.log(calc (7,8));


// function retVar(){
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str="test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelvw = "12.2px";

// // console.log(Math.round(twelvw));
// console.log(parseInt(twelvw));
// console.log(parseFloat(twelvw));

function first(){
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learJS(lang, colback){
    console.log("я учу " + lang);
    colback();
}

learJS("JavaScript", function(){
    console.log("я прошел 3 урок!");
})