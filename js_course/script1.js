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
*/
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