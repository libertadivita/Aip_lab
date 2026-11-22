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
*/


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