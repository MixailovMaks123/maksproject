"use strict";

// let a = "I JavaScript!";

// alert(a);

// let planetEarth = "Земля";

// let currenVisitor;

// currenVisitor = planetEarth;

// // alert(currenVisitor);

// alert (typeof currenVisitor);

// let name = prompt("Ваше имя?", " ");

// alert(`Ваше имя ${name}`);

// let nameJS = prompt('официальное название JavaScript?', '');

// if(nameJS == 'ECMAScript'){
//     alert('Правильно!');
// }else{
//     alert('Вы не знаете?');
// }

// let num = prompt('напишите число', '');

// if(num>0){
//     alert('1');
// }else if(num<0){
//     alert('-1');
// }else if(num==0){
//     alert('0');
// }

// let name = prompt('кто там?', '');

// if(name ==  "Админ"){
    
//     let password=prompt('пароль', '');
    
//     if(password=='Я главный'){
//         alert('Здравствуйте!');
//     }else if(password ==''||pass==null){
//         alert('Отменено');
//     }else{
//         alert('Не верный пароль');
//     }

// }else if(name == '' || name == null){
//     alert('Отменено');
// }else{
//     alert('Я вас не знаю');
// }

// for(let i=2; i<=10; ++i){
//     if(i%2){
//         continue;
        
//     }
//     alert(i);
// }


// let i=0;
// while(i<3){
//     alert(`nuber ${i}!`);
//     ++i;
// }


// let i;
// do{
//     i = prompt('Bведите число больше 100', 0);
// }while(i<=100 && i);

// let num = +prompt('напишите число', '');

// let i = 2 + num;

// switch (i) {
//   case(3):
//     alert( 'Маловато' );
//     break;
//   case(4):
//     alert( 'В точку!' );
//     break;
//   case (5):
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case(0):
//     alert('Вы ввели число 0');
//     break;

//     case(1):
//     alert('Вы ввели число 1');
//     break;

//     case(2):
//     case(3):
//     alert('Вы ввели число 2 или 3');
//     break;

//     default:
//     alert('это другое число');
// }


// let age = +prompt('Ваш возраст','');

// function sheckAge(age){
//     (age>18)? true (alert('добро пожаловать')):
//     confirm('Родители разрешили?');
    
// }

// sheckAge(age);


let agreement = confirm('Вы согластны?');

let fun = (agreement)?
    () => alert('Вы согласились.'):
    () => alert('Вы отменили выполнение.');

fun();







