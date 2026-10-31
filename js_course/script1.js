"use strict"; // строгий режим
// Module 1
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


// Module 2


let arr = [1,2,3];
alert(arr);
console.log(arr)

let arr1 = ["a","b","c"];
alert(arr1);
console.log(arr1)


let arr = [1,2,3];
alert(arr[0]); 
alert(arr[1]); 
alert(arr[2]);
alert(arr[0] + arr[1] + arr[2]);

let arr1 = ['a', 'b', 'c', 'd'];
alert(arr1[0] + "+" + arr1[1] + "+" + arr1[2] + "+" + arr1[3]);


let mas = [1,2,3,4,5,6];
alert(mas.length);
alert(mas[mas.length - 1]);


let mas = ["a","b","c"];
mas[0] = 1;
mas[1] = 2;
mas[2] = 3; 
alert(mas);


let arr = [1,2];
arr[0] += 3;
arr[1] += 3;
alert(arr);


let arr = [1,2,3];
arr[0]++;
arr[1]++;
arr[2]++;
alert(arr);


let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
alert(arr);

let arr1 = [1, 2, 3];
arr1[3] = 4;
arr1[4] = 5;
alert(arr1)


let arr = [];
arr[3] = 'a';
arr[8] = 'b';
alert(arr.length);


let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
alert(arr);

let arr = [1,2,3];
arr.push(4);
arr.push(5);
alert(arr);


let arr = ['a', 'b', 'c'];
let key = 2;
alert(arr[key]);

let arr1 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
alert(arr1[key1] + arr1[key2]);


let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[4];
delete arr[2];
alert(arr.length);


let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]); // -1 

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]); // нумерация с 0

let arr2 = [1, 2, 3, 4, 5]; //скобки квадратные
console.log(arr2.length);

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length); // length 


// Модуль 3

let obj = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'};
console.log(obj);

let obj1 = { 1: 'январь', 2: 'февраль', 3: 'март', 4: 'апрель', 5: 'май', 
	6: 'июнь',7: 'июль',8: 'август',9: 'сентябрь',10: 'октябрь',11: 'ноябрь',12: 'декабрь'};
console.log(obj1);

let obj2 = {'name': "Иван", 'surname': "Иванов", 'patronymic': "Иванович"};
console.log(obj2["name"], obj2["surname"], obj2["patronymic"]);

let date = {year: 2026, month: 10, day: 18};
console.log(date.year + '-' + date.month + '-' + date.day);

let obj = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj['1a']); 
console.log(obj['b2']);  
console.log(obj['c-c']); 
console.log(obj['d 4']); 
console.log(obj['e5']);  


let obj = {x: 1, y: 2, z: 3};
obj.x = obj.x ** 2;
obj.y = obj.y ** 2;
obj.z = obj.z ** 2;
console.log(obj);


let obj = {};
obj.a = 1;
obj.b = 2;
console.log(obj);


let obj = {3: 'c', 1: 'a', 2: 'b'};

console.log(obj[1]); 
console.log(obj[2]); 
console.log(obj[3]); 


let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);
console.log(keys.length);


let obj = {x: 1, y: 2, z: 3};
let key = 'y';
console.log(obj[key]);


let obj = {x: 1, y: 2, z: 3};
console.log(obj["x"]); // кавычки


let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]); // без кавычек


let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);// квдр скобки без точки


let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);// без кавычек


let key = 'x';

let obj = {
	[key]: 1, // переменная в квдр скобках
	y: 2,
	z: 3
};

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let obj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};


const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];

console.log(res);


let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']); //кавычки

let obj1 = {x: 1, y: 2, z: 3};
let key1 = 'x';
console.log(obj1[key1]); //квдр скобки без точки

let obj3 = {x: 1, y: 2, z: 3};
let sum3 = obj3.x + obj3.y + obj3.x; // точка
console.log(sum3); // sum

let obj4 = {x: 1, y: 2, z: 3};
let keys4;
console.log(Object.keys4(obj4).length);


// Модуль 4


let test = 10;

if (test >  10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test <  10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test <=  10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test >=  10) {
	console.log('+++'); 
} else {
	console.log('---');
}

if (test == 10) {
    console.log('+++');
} else {
    console.log('---');
}

if (test != 10) {
    console.log('+++');
} else {
    console.log('---');
}

 
let test1 = 1;
let test2 = 2;

if (test2 > test1) {
	console.log('test2 > test1'); 
} else {
	console.log('test2 < test1');
}

if (test2 == test1) {
	console.log('test2 == test1'); 
} else {
	console.log('test2 != test1');
}


let test1 = "abc";
let test2 = "cba";

if (test2 == test1) {
	console.log('test2 == test1'); 
} else {
	console.log('test2 != test1');
}


let test1 = '123';
let test2 = 123;

if (test2 == test1) {
	console.log('test2 == test1'); 
} else {
	console.log('test2 != test1');
}


let num = 3;

if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

if (num >= 10 && num <= 20) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = 2;
let num2 = 3;

if (num1 <= 1 && num2 >= 3) {
	console.log('+++');
} else {
	console.log('---');
}


if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if(test) {
	console.log('+++');
} else {
	console.log('---');
}


let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}


let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}


let test3 = true;
let test4 = true;

if (test3 && !test4 ) {
	console.log('+++');
} else {
	console.log('---');
}


let test5 = true;
let test6 = true;

if (!test5 && !test6) {
	console.log('+++');
} else {
	console.log('---');
}


let test7 = true;
let test8 = true;

if (!(!test7) && test8) {
	console.log('+++');
} else {
	console.log('---');
}


let test9 = true;
let test10 = true;
let test11 = true;

if (test9 && test10 && test11) {
	console.log('+++');
} else {
	console.log('---');
}


let test12 = true;
let test13 = true;
let test14 = true;

if (test12 || test13 && test14) {
	console.log('+++');
} else {
	console.log('---');
}


let test15 = true;
let test16 = true;
let test17 = true;

if (test15 || !test16 && !test17) {
	console.log('+++');
} else {
	console.log('---');
}



let test = 10;

if (test == 10) {
	console.log('yes');
}

if (test > 0) 
	console.log('+++');
else 
	console.log('---');

if (test > 0) console.log('+++');


let num = 15;

if (num >= 1 && num <= 10) {
	console.log('1 декада');
} else if (num >= 11 && num <= 20) {
	console.log('2 декада');
} else if (num >= 21 && num <= 31) {
	console.log('3 декада');
} else {
	console.log('неверное значение переменной num');
}


let num = 88;
let sum = 0;

if (num >= 10 && num <= 99) {
    sum = Number(String(num)[0]) + Number(String(num)[1]);
	if (sum <= 9) {
		console.log('сумма цифр однозначна');
	} else {
		console.log('сумма цифр двузначна');
	}
} else {
	console.log('не входит в диапазон');
}


let lang = 'en';

switch (lang) {
	case 'ru':
		console.log('rus');
	break;
	case 'en':
		console.log('eng');
	break;
	case 'de':
		console.log('deu');
	break;
	default:
		console.log('language not supported');
	break;
}

let num = 1;
let res = num >= 0 ? "1": "2";
console.log(res);


let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);

let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);

let ok = confirm('Вам есть 18?');

if (ok) {
	console.log('текст для взрослых');
} else {
	console.log('доступ запрещён');
}

let age = 17;
let adult; // вне скобок
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);


let age = 17;
let adult;

if (age >= 18) {
	adult = true; // убрали let
} else {
	adult = false; // убрали let
}

console.log(adult);


let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false; // убрали let
}

console.log(adult)


let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23'; // убрали let
	} else {
		res = 'больше 23'; // убрали let
	}
} else {
	res = 'меньше 18'; // убрали let
}

console.log(res);


let age = 19;
let res;

if (age >= 18) {
	// убрали let res
	
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);


let min = 10;

if (min >= 0 && min <= 19) {
	console.log('1 треть');
}

if (min >= 20 && min <= 39) {
	console.log('2 треть');
}

if (min >= 40 && min <= 59) {
	console.log('3 треть');
}


let arr = '123';

if (arr.length == 3) {
	console.log(Number(arr[0]) + Number(arr[1]) + Number(arr[2]));
}

let str = 'a234x';

if (str[0] == "a") {
	console.log('!');
}

if (str[str.length - 1] == "x") {
	console.log('!');
}

if (str[0] == "a" || str[0] == "b") {
	console.log('!');
}


let num = 123450;
let strnum = String(num);
if (strnum[strnum.length - 1] == 0) {
	console.log('верно');
} else {
	console.log('неверно');
}


let num = 123451;
let strnum = String(num);
if (strnum[strnum.length - 1] == 0 || strnum[strnum.length - 1] == 2 || strnum[strnum.length - 1] == 4 || strnum[strnum.length - 1] == 6 || strnum[strnum.length - 1] == 8) {
	console.log('верно');
} else {
	console.log('неверно');
}


let a = 11;
let rest = a % 2;

if (rest === 0) {
	console.log('чётное');
} else {
	console.log('нечётное');
}


let a = 12;
let rest = a % 3;

if (rest === 0) {
	console.log('делится на 3');
} else {
	console.log('не делится на 3');
}


let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = Number('1');
let num2 = Number('2');

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) { //каждая переменная число
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num)[0] == 1) { // string и ==
	console.log('+++');
} else {
    console.log('---');
}

let num = 123;

if (String(num)[0] == 1) { // индекс вне string и ==
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;

if (String(num)[0] == 1) { // ==
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let first = String(num)[0];

if (first == 1) { // ==
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) { // string
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;
let str = String(num); // string вместо number и num вместо str

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) { // без метода в скобках 
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) { // убрали string(2)
	console.log('+++');
} else {
	console.log('---');
}

let num = 12;

if (String(num).length === 2) { //length
	console.log('+++');
} else {
	console.log('---');
}

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]); // number
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]); // number

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

let month = 7;
if (month <= 2 || month == 12) console.log("зима");
if (month <= 5 && month > 2) console.log("весна");
if (month <= 8 && month > 5) console.log("лето");
if (month <= 11 && month > 8) console.log("осень");

let str = "abcde";
if (str[0] == "a") { 
	console.log('+++');
} else {
    console.log('---');
}

let num = 12345;
if (String(num)[0] == "1" || String(num)[0] == "2" || String(num)[0] == "3") { 
	console.log('+++');
} else {
    console.log('---');
}

let num1 = 123;
console.log(Number(String(num1)[0]) + Number(String(num1)[1]) + Number(String(num1)[2]));

let num2= '234432'; 

let sum1 = Number(num2[0]) + Number(num2[1]) + Number(num2[2]); 
let sum2 = Number(num2[3]) + Number(num2[4]) + Number(num2[5]); 

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

//Модуль 5 
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}


let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); 
}


let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(obj[key]); 
}


let i = 1;
while (i < 101)
{
	console.log(i)
	i++;
}

let k = 11;
while (k < 34)
{
	console.log(k)
	k++;
}

let c = 100;
while (c > 0)
{
	console.log(c)
	c--;
}

let num = 68;
let n = 0;
while (num <= 1000)
{
	num *= 3;
	n++;
}
console.log(n);


for (let i = 1; i < 101; i++)
{
	console.log(i);
}


for (let i = 11; i < 34; i++)
{
	console.log(i);
}


for (let i = 0; (i < 101); i++)
{
	if (i%2 == 0){
		console.log(i);
	}
}

for (let i = 1; (i < 100); i++)
{
	if (i%2 != 0){
		console.log(i);
	}
}


for (let i = 100; i > -1; i--)
{
	console.log(i);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i ++)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i ++)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i --)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length - 1; i++) { // -1
	console.log(arr[i]);
}


let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr)
{
	if (elem > 3 && elem < 10)
	{
		console.log(elem);
	}
}


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj)
{
	if (obj[key] % 2 != 0)
	{
		console.log(obj[key]);
	}
}


let res = 0;
for (let i = 2; i < 101; i++)
{
	res += i;
}
console.log(res);


let res = 0;
for (let i = 1; i < 100; i++)
{
	if (i % 2 != 0)
	{
		res += i;
	}
}
console.log(res);


let res = 1; 
for (let i = 1; i < 21; i++)
{
	res *= i;
}
console.log(res);


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res += arr[i];
}
console.log(res)


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	if (arr[i] % 2 == 0)
	{
		res += arr[i];
	}
}
console.log(res);


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res += arr[i]**2;
}
console.log(res)


let res = 1;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res *= arr[i];
}
console.log(res);


let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);


let str = '';
for (let i = 1; i < 10; i++) {
	str += String(i);
}
console.log(str);
*/
/*
let str = '';
for (let i = 1; i < 10; i++) {
		str += '-' + String(i);
}
str += '-'
console.log(str);


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}


let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); 
}


let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(obj[key]); 
}


let i = 1;
while (i < 101)
{
	console.log(i)
	i++;
}

let k = 11;
while (k < 34)
{
	console.log(k)
	k++;
}

let c = 100;
while (c > 0)
{
	console.log(c)
	c--;
}

let num = 68;
let n = 0;
while (num <= 1000)
{
	num *= 3;
	n++;
}
console.log(n);


for (let i = 1; i < 101; i++)
{
	console.log(i);
}


for (let i = 11; i < 34; i++)
{
	console.log(i);
}


for (let i = 0; (i < 101); i++)
{
	if (i%2 == 0){
		console.log(i);
	}
}

for (let i = 1; (i < 100); i++)
{
	if (i%2 != 0){
		console.log(i);
	}
}


for (let i = 100; i > -1; i--)
{
	console.log(i);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i ++)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i ++)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i --)
{
	console.log(arr[i]);
}


let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length - 1; i++) { // -1
	console.log(arr[i]);
}


let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr)
{
	if (elem > 3 && elem < 10)
	{
		console.log(elem);
	}
}


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj)
{
	if (obj[key] % 2 != 0)
	{
		console.log(obj[key]);
	}
}


let res = 0;
for (let i = 2; i < 101; i++)
{
	res += i;
}
console.log(res);


let res = 0;
for (let i = 1; i < 100; i++)
{
	if (i % 2 != 0)
	{
		res += i;
	}
}
console.log(res);


let res = 1; 
for (let i = 1; i < 21; i++)
{
	res *= i;
}
console.log(res);


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res += arr[i];
}
console.log(res)


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	if (arr[i] % 2 == 0)
	{
		res += arr[i];
	}
}
console.log(res);


let res = 0;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res += arr[i]**2;
}
console.log(res)


let res = 1;
let arr = [2, 5, 9, 3, 1, 4];
for (let i = 0; i < arr.length; i++)
{
	res *= arr[i];
}
console.log(res);


let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);


let str = '';
for (let i = 1; i < 10; i++) {
	str += String(i);
}
console.log(str);

let str = '';
for (let i = 1; i < 10; i++) {
		str += '-' + String(i);
}
str += '-'
console.log(str);


for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	console.log(str[0]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if(str[0] == '1')
	console.log(Number(str[0]) + Number(str[1]));
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if(str[0] === '1')
	{console.log(str)}
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if(Number(str[0]) + Number(str[1]) === 5)
	{
		console.log(str)
	}
	
}

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) 
	console.log(elem);

for (let i = 1; i <= 100; i++) {
	if(i%2 != 0)
	{
		continue;
	}
	console.log(i)
}
	
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(String(i)+String(j)+' ');
	}
}

let arr = [9,6,4,-1,3,-2,-5];
let arr2 = [];
for (let i = 0; i <= 6; i++)
{
	if(arr[i] > 0)
	{
		arr2.push(arr[i]);
	}
}
console.log(arr2);


let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
	let key = arr1[i];
	let value = arr2[i];
	
	obj[key] = value;
}

console.log(obj);

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
	obj[key]++;
}
console.log(obj);

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for(let i = 0; i <= 4; i++)
{
	if(arr[i] === 'c')
	{
		flag = true;
	}
}
if (flag == true)
{
	console.log('+++');
}
else
{
	console.log('---');
}

let arr = [10, 20, 30, 40, 21, 32, 51];
let res = 0;
for(let i = 0; i <= 6; i++)
{
	if(String(arr[i])[0] == '1' || String(arr[i])[0] == '2')
	{
		res += arr[i];
	}
}
console.log(res);

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	console.log(obj[elem]);
	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') { // невозможное условие И, elem не объект 
		sum += obj[elem]; // объект 
	}
}

console.log(sum);


// №1
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// №2
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// №3
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// №4
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}

// №5
let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);

// №6
let res1 = 1;

for (let i = 1; i <= 10; i++) {
	res1 *= i;
}

console.log(res1);

// №7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);

// №8
let arr1 = ['1', '2', '3', '4', '5'];
let sum1 = 0;

for (let elem of arr1) {
	sum1 += +elem;
}

console.log(sum1);

// №9
let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
	sum2 += +elem;
}

console.log(sum2);

// №10
let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let i = 0; i < arr3.length; i++) {
	sum3 += +arr3[i];
}

console.log(sum3);

// №11
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
	sum4 += +arr4[i];
}

console.log(sum4);

// №12
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i < arr5.length; i++) {
	sum5 += +arr5[i];
}

console.log(sum5);

// №13
let arr6 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr6.length; i++) {
	arr6[i] = arr6[i] ** 2;
}

console.log(arr6);

// №14
let arr7 = [];

for (let i = 1; i <= 5; i++) {
	arr7.push(i);
}

console.log(arr7);

// №15
let obj8 = {a: 1, b: 2, c: 3};
let sum8 = 0;

for (let key in obj8) {
	sum8 += obj8[key];
}

console.log(sum8);

// №16
let obj9 = {a: 1, b: 2, c: 3};
let sum9 = 0;

for (let key in obj9) {
	sum9 += obj9[key];
}

console.log(sum9);

// №17
let arr11 = [1, 2, 3, 4, 5];
let res11 = '---';

for (let elem of arr11) {
	if (elem === 3) {
		res11 = '+++';
		break;
	}
}

console.log(res11);

// №18
let arr12 = [];

for (let i = 1; i <= 5; i++) {
	arr12.push(i);
}

console.log(arr12);

// №19
let arr13 = [1, 2, 3, 4, 5];
let res13 = false;

for (let elem of arr13) {
	if (elem === 3) {
		res13 = true;
		break;
	}
}

console.log(res13);

// №20
let arr14 = [1, 2, 3, 4, 5];

for (let elem of arr14) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}

// №21
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res15 = [];

for (let elem of arr15) {
	if (elem % 2 !== 0) {
		res15.push(elem);
	}
}

console.log(res15);
*/

// №1
for (let i = 1; i <= 100; i++) {
	console.log(i);
}

// №2
for (let i = 100; i >= 1; i--) {
	console.log(i);
}

// №3
for (let i = 2; i <= 100; i += 2) {
	console.log(i);
}

// №4
let arr4 = [];

for (let i = 0; i < 10; i++) {
	arr4.push('x');
}

console.log(arr4);

// №5
let arr5 = [];

for (let i = 1; i <= 10; i++) {
	arr5.push(i);
}

console.log(arr5);

// №6
let arr6 = [5, -3, 12, 8, 0, 9, 15];

for (let elem of arr6) {
	if (elem > 0 && elem < 10) {
		console.log(elem);
	}
}

// №7
let arr7 = [1, 2, 3, 4, 5];
let found7 = false;

for (let elem of arr7) {
	if (elem === 5) {
		found7 = true;
		break;
	}
}

console.log(found7);

// №8
let arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;

for (let elem of arr8) {
	sum8 += elem;
}

console.log(sum8);

// №9
let arr9 = [1, 2, 3, 4, 5];
let sum9 = 0;

for (let elem of arr9) {
	sum9 += elem ** 2;
}

console.log(sum9);

// №10
let arr10 = [1, 2, 3, 4, 5];
let sum10 = 0;

for (let elem of arr10) {
	sum10 += elem;
}

let avg10 = sum10 / arr10.length;
console.log(avg10);

// №11
let n11 = 5;
let factorial11 = 1;

for (let i = 2; i <= n11; i++) {
	factorial11 *= i;
}

console.log(factorial11);

// №12
let arr12 = [];

for (let i = 10; i >= 1; i--) {
	arr12.push(i);
}

console.log(arr12);

// №13
let arr13 = [5, -3, 10, -7, 2, -1];
let sum13 = 0;

for (let elem of arr13) {
	if (elem > 0) {
		sum13 += elem;
	}
}

console.log(sum13);

// №14
let arr14 = [10, 20, 30, 50, 235, 3000];

for (let elem of arr14) {
	let first14 = String(elem)[0];

	if (first14 === '1' || first14 === '2' || first14 === '5') {
		console.log(elem);
	}
}

// №15
let arr15 = [1, 2, 3, 4, 5];

for (let i = arr15.length - 1; i >= 0; i--) {
	console.log(arr15[i]);
}

// №16
let arr16 = [0, 5, 2, 8, 4];

for (let i = 0; i < arr16.length; i++) {
	if (arr16[i] === i) {
		console.log(arr16[i]);
	}
}

// №17
let arr17 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr17.length; i++) {
	document.write(arr17[i] + '<br>');
}

// №18
let arr18 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr18.length; i++) {
	document.write('<p>' + arr18[i] + '</p>');
}

// №19
let days19 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

for (let i = 0; i < days19.length; i++) {
	if (i >= 5) {
		document.write('<b>' + days19[i] + '</b><br>');
	} else {
		document.write(days19[i] + '<br>');
	}
}

// №20
let days20 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let day20 = 2;

for (let i = 0; i < days20.length; i++) {
	if (i === day20) {
		document.write('<i>' + days20[i] + '</i><br>');
	} else {
		document.write(days20[i] + '<br>');
	}
}

// №21
let obj21 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj21) {
	obj21[key] *= 1.1;
}

console.log(obj21);

// №22
let obj22 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj22) {
	if (obj22[key] <= 400) {
		obj22[key] *= 1.1;
	}
}

console.log(obj22);

// №23
let arr1_23 = [1, 2, 3, 4, 5];
let arr2_23 = [6, 7, 8, 9, 10];
let obj23 = {};

for (let i = 0; i < arr1_23.length; i++) {
	obj23[arr1_23[i]] = arr2_23[i];
}

console.log(obj23);

// №24
let obj24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys24 = 0;
let sumValues24 = 0;

for (let key in obj24) {
	sumKeys24 += +key;
	sumValues24 += obj24[key];
}

console.log(sumKeys24 / sumValues24);

// №25
let obj25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys25 = [];
let values25 = [];

for (let key in obj25) {
	keys25.push(key);
	values25.push(obj25[key]);
}

console.log(keys25);
console.log(values25);

// №26
let obj26 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let res26 = [];

for (let key in obj26) {
	let first26 = String(obj26[key])[0];

	if (first26 === '1' || first26 === '2') {
		res26.push(obj26[key]);
	}
}

console.log(res26);

// №27
let arr27 = ['a', 'b', 'c', 'd', 'e'];
let obj27 = {};

for (let i = 0; i < arr27.length; i++) {
	obj27[i + 1] = arr27[i];
}

console.log(obj27);

// №28
let arr28 = ['a', 'b', 'c', 'd', 'e'];
let obj28 = {};

for (let i = 0; i < arr28.length; i++) {
	obj28[arr28[i]] = i + 1;
}

console.log(obj28);