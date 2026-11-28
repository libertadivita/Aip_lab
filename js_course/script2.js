"use strict";
 
// Модуль 12
/*

function task5_1()
{
	let count = 0;
	return function()
	{
		console.log(count);
		count++;
	};
}
let counter5_1 = task5_1();
counter5_1();
counter5_1();


function task5_2()
{
	let count = 10;
	return function()
	{
		if (count > 0)
		{
			console.log(count);
			count--;
		}
		else
		{
			console.log('Отсчет окончен');
		}
	};
}
let counter5_2 = task5_2();
counter5_2();


// Модуль 13 


(function()
{
	return function()
	{
		return function()
		{
			console.log('!');
		};
	};
})()()();


(function(num1)
{
	return function(num2)
	{
		console.log(num1 + num2);
	};
})(1)(2);


(function(num1)
{
	return function(num2)
	{
		return function(num3)
		{
			console.log(num1 + num2 + num3);
		};
	};
})(1)(2)(3);


let counter9_1 = (function()
{
	let num = 1;
	return function()
	{
		console.log(num);
		num++;
	};
})();
counter9_1();
counter9_1();


let counter9_2 = (function()
{
	let num = 1;
	return function()
	{
		console.log(num);
		if (num >= 5)
		{
			num = 1;
		}
		else
		{
			num++;
		}
	};
})();
counter9_2();
counter9_2();
counter9_2();
counter9_2();
counter9_2();
counter9_2();



// Модуль 14 



function func2_1(arr)
{
	console.log(arr.shift());
	if (arr.length !== 0)
	{
		func2_1(arr);
	}
}
let arr2_1 = [1, 2, 3, 4, 5];
func2_1(arr2_1);


function func3_1(arr)
{
	let sum = arr.shift() ** 2;
	if (arr.length !== 0)
	{
		sum += func3_1(arr);
	}
	return sum;
}
let arr3_1 = [1, 2, 3, 4, 5];
console.log(func3_1(arr3_1));


function func4_1(obj)
{
	for (let key in obj)
	{
		if (typeof obj[key] == 'object')
		{
			func4_1(obj[key]);
		}
		else
		{
			console.log(obj[key]);
		}
	}
}
let obj4_1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
func4_1(obj4_1);


function func4_2(arr)
{
	let res = [];
	for (let elem of arr)
	{
		if (Array.isArray(elem))
		{
			res = res.concat(func4_2(elem));
		}
		else
		{
			res.push(elem);
		}
	}
	return res;
}
let arr4_2 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
console.log(func4_2(arr4_2));


function func5_1(obj)
{
	let sum = 0;
	for (let key in obj)
	{
		if (typeof obj[key] == 'object')
		{
			sum += func5_1(obj[key]);
		}
		else
		{
			sum += obj[key];
		}
	}
	return sum;
}
let obj5_1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(func5_1(obj5_1));


function func5_2(arr)
{
	let str = '';
	for (let elem of arr)
	{
		if (Array.isArray(elem))
		{
			str += func5_2(elem);
		}
		else
		{
			str += elem;
		}
	}
	return str;
}
let arr5_2 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(func5_2(arr5_2));


function func6_1(arr)
{
	for (let i = 0; i < arr.length; i++)
	{
		if (Array.isArray(arr[i]))
		{
			arr[i] = func6_1(arr[i]);
		}
		else
		{
			arr[i] = arr[i] ** 2;
		}
	}
	return arr;
}

let arr6_1 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(func6_1(arr6_1));
*/



// Модуль 15



let arr1_1 = [4, 9, 16];
let res1_1 = arr1_1.map(function(elem) {return Math.sqrt(elem);});
console.log(res1_1);

let arr1_2 = ['a', 'b', 'c'];
let res1_2 = arr1_2.map(function(elem) {return elem + '!';});
console.log(res1_2);

let arr1_3 = ['abc', 'def'];
let res1_3 = arr1_3.map(function(elem) {return elem.split('').reverse().join('');});
console.log(res1_3);

let arr1_4 = ['123', '456', '789'];
let res1_4 = arr1_4.map(function(elem) {
	return elem.split('').map(Number);
});
console.log(res1_4);

let arr1_5 = [1, 2, 3, 4];
let res1_5 = arr1_5.map(function(elem, index) {return elem * index;});
console.log(res1_5);


let arr2_1 = [1, 2, 3, 4, 5];
let sum2_1 = 0;
arr2_1.forEach(function(elem) {
	sum2_1 += elem ** 2;
});
console.log(sum2_1);


let arr3_1 = [-2, 1, -5, 10];
let res3_1 = arr3_1.filter(function(elem)
{
	return elem > 0;
});
console.log(res3_1);

let arr3_2 = [-2, 1, -5, 10];
let res3_2 = arr3_2.filter(function(elem)
{
	return elem < 0;
});
console.log(res3_2);

let arr3_3 = [-2, 1, -5, 10, 5];
let res3_3 = arr3_3.filter(function(elem)
{
	return elem > 0 && elem < 10;
});
console.log(res3_3);

let arr3_4 = ['apple', 'cat', 'banana', 'dog'];
let res3_4 = arr3_4.filter(function(elem)
{
	return elem.length > 5;
});
console.log(res3_4);

let arr3_5 = [10, 2, 5, 15];
let res3_5 = arr3_5.filter(function(elem, index)
{
	return elem * index < 30;
});
console.log(res3_5);

let arr3_6 = [1, 2, [3, 4], 5, [6, 7]];
let res3_6 = arr3_6.filter(function(elem)
{
	return !Array.isArray(elem);
});
console.log(res3_6);


let arr4_1 = [2, 5, 8];
let res4_1 = arr4_1.every(function(elem)
{
	return elem > 0;
});
console.log(res4_1);

let arr4_2 = [10, 2, 5];
let res4_2 = arr4_2.every(function(elem, index)
{
	return elem * index < 30;
});
console.log(res4_2);


let arr5_1 = [-5, -2, 0, 3];
let res5_1 = arr5_1.some(function(elem)
{
	return elem > 0;
});
console.log(res5_1);

let arr5_2 = [1, 2, 4];
let res5_2 = arr5_2.some(function(elem, index)
{
	return elem * index > 30;
});
console.log(res5_2);