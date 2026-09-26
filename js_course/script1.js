"use strict"; // строгий режим
/*

let num;
num = 123;
alert(num);

let a = 10;
let b = 2;
alert (a+b);
alert (a*b);
alert (a-b);
alert (a/b);


let c = 10;
let d = 5;
let result = c+d;
alert (result);


let a = 1;
let b = 2;
let c = 3;
alert(a+b+c)


let a = 10;
let b = 5;
let c = a-b; 
let d = 7;
let result = c + d; 
alert(result);


let a = 1.5;
let b = 0.75;
alert(a+b);


let a = -100;
alert(-a);


let a = 13;
let b = 5;
alert(a%b);


alert(2**10);


let first_name = "Ruslan";
let last_name = "Shevchenko-Afuzov";
alert(first_name);
alert(last_name);


let str = "!!!";
alert(str);

let str1 = "java";
let str2 = "script";
alert(str1+str2);

let hello = "hello";
let world = "world";
alert(hello+world);


let str = "emrnnev";
alert(str.length);


let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1} bbb ${str2} ccc`;
alert(txt);


let str = `a
b
c`;
alert(str);


let a;
alert(a);


let a = null;
alert(a);


let t = true;
let f = false;
alert(t);
alert(f);


let str1 = 'xxx';
let str2 = 'yyy';
alert(str1*str2);


alert( 10 / 0); 
alert(-10 / 0);


let PI = 3.14;
let r = 2;
let l = 2 * PI * r;
alert(l);


let a = '10';
let b = '20';
alert(Number(a) + Number(b));


let a = +'2';
let b = +'3';
alert(a + b); 

let num1 = parseInt("5");
let num2 = parseInt("6");
alert(num1 + num2);

let num1 = parseFloat("5.5");
let num2 = parseFloat("6.25");
alert(num1 + num2 + "px");


let num1 = 15;
let num2 = 26;

alert(String(num1) + String(num2));


let num = 12345;
let num1 = 52626;
alert(String(num).length + String(num1).length);


let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);


let str = 'abcde';
let rts = str[4] + str[3] + str[2] + str[1] + str[0];
alert(rts);


let str = 'abcde';
let num = 2;
alert(str[num]);


let str = "wertyujm";
alert(str[str.length - 3])


let test = '12345'; 
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));


let test = String(12345); 
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
alert(test[0] * test[1] * test[2] * test[3] * test[4]);
alert(test[4] + test[3] + test[2] + test[1] + test[0]);


let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);


let num = 10;
num++;
num++;
num--;
alert(num);


let a = 0.1 + 0.2;
alert(+a.toFixed(2));
alert(0.1 * 0.2);
alert(0.3 - 0.1);


alert("Ваш возраст: " + prompt("Ваш возраст?"));


let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

alert(num1 + num2); 

let num = Number(prompt("Введите сторону квадрата"));
alert(num**2);

let a = Number(prompt('Введите первую сторону'));
let b = Number(prompt('Введите вторую сторону'));
alert(2*a +2*b);


document.write('text<br>');
document.write('<i>text</i><br>');
let str = 'text';
document.write(`<i>${str}</i><br>`);
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');


let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2)); //добавили скобки 

let a = 1;
let b = 2;
let c = 3; //объявили переменную
console.log(a + b + c);

let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]); //задали как числа
console.log(sum);

let num = 123;
console.log(String(num)[0]); //задали переменную строкой

let num = 123;
console.log(String(num).length); //задали переменную строкой

let a = 24 * 60 * 60; //умножение
console.log(a);

let num = 123;
let str = String(num);
console.log(str.length); //поменяли переменную

let num = 123;
let str = String(num);
console.log(str[str.length-1]); // поменяли переменную; -1 

let num = 123;
let str = String(num);
console.log(str.length); // ошибка в названии lenght

let num = 123;
let str = String(num);
console.log(str[str.length-1]); //-1

let a = '123';
let b = '456';
let s = Number(a) + Number(b); // b number
console.log(s);


alert(60*60*24);
alert(60*60*24*30);
alert(60*60*24*365);
alert(60*24);
alert(1024*1024);
alert(1024*1024*1024);
alert(1024*1024*1024*10);
alert(1024**4);
alert(1024**3);
*/

let r = 2;
let s = 3.14 * r**2;
alert(s);

let a = 3;
let s1 = a**2;
alert(s1);

let a1 = 2;
let b1 = 5;
let s2 = a1*b1;
alert(s2);

let a2 = 3;
let b2 = 4;
let p = 2*a2 + 2*b2;
alert(p);

let tc = 26;
let tf = tc*1.8 + 32;
alert(+tf.toFixed(2));

let tf1 = 78.8;
let tc1 = (tf1 - 32)/1.8;
alert(+tc1.toFixed(2));