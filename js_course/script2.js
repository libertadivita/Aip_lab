"use strict";
 
// Модуль 12


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