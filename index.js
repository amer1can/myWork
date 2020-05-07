'use strict';

// 9. Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
// Пример:
// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

/////// это мой вариант
// const isPowerOfThree = n => {
//   let count = 0,
//   res = n,
//   check = false;
//   if (n === 1) {check = true;}
//   while (res % 3 === 0) {
//     res = res / 3;
//     count += 1;
//     check = true;
//   }
//   (check) ? console.log('true (3^'+ count +')') : console.log('false');
// };
// isPowerOfThree(81);

//  8. Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:
// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
// fizzBuzz(11, 20);
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// const showFizzBizz = (a, b) => {
//   if (a < b && a !== 0 && b !== 0) {
//   for (let i = a; i <= b; i += 1) {
//     (i % 3 === 0) ? console.log('fizz') : 
//     (i % 5 === 0) ? console.log('buzz') : 
//     ((i % 3 === 0) && (i % 3 === 0)) ? console.log('fizzbuzz') :
//     console.log(i);
//   }
// }
// };
// showFizzBizz(11,20);

// -7.  Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.
// Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число. Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит количество атомов в наблюдаемой части Вселенной.
// Функция Аккермана определяется рекурсивно для неотрицательных целых чисел m и n следующим образом:
// https://ru.m.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%90%D0%BA%D0%BA%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B0
// ackermann(0, 0); // 1
// ackermann(2, 1); // 5
// ackermann(2, 3); // 9

// const ackermann = (m,n) => {
//   if (m === 0) {return (n + 1);}
//   if (m > 0 && n === 0) {return ackermann((m - 1), 1);}
//   if (m > 0 && n > 0) {return ackermann((m - 1), ackermann(m, (n - 1)));}
// };
// console.log(ackermann(0,0));


// 6. Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.
// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Закрывающая скобка не должна идти впереди открывающей.
// areBracketsBalanced('(())');  // true
// areBracketsBalanced('((())'); // false

// const areBracketsBalanced = str => {
//   if (str === '') {console.log('true')};
//   if ((str.length % 2 === 0) && (str !== '')) {
//     let left = false,
//         right = false;
//     for (let i = 0; i < str.length/2; i += 1) {
//       (str[i] === '(') ? left = true : left = false;
//     }
//     for (let i = str.length/2; i < str.length; i += 1) {
//       (str[i] === ')') ? right = true : right = false;
//     }
//     ((left) && (right)) ? console.log('true') : console.log('false');
//   }  else {
//     console.log('false');
//   }
// };
// areBracketsBalanced('((())');

// 5.  Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.
// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98
// var reverse = '';         //////почему-то создает не пустую строку, а undefined
// const reverseInt = num => {

//   let numStr = String(num);
//   for (let i = numStr.length; i >= 0; i -= 1 ) {
//     reverse += numStr[i];
//   }
//   console.log(reverse);
// }
// reverseInt(-12345);


// 4. Сумма квадратов первых десяти натуральных чисел это 1^2 + 2^2 + 3^2 + ... + 10^2 = 385.
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)^2 = 552 = 3025.
// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

// const sumSquareDifference = n => {
//   const sumSquare = n => {          /////func для квадратов n чисел
//     let res = 0;
//     for (let i = 1; i <= n; i += 1) {
//       res += i * i;
//     }
//     return res;
//   };
//   const squareSum = n => {        ////func для суммы квадратов
//     let res = 0;
//     for (let i = 1; i <= n; i += 1) {
//       res += i;
//     }
//     res *= res;
//     return res;
//   }
//    return squareSum(n) - sumSquare(n);   //////difference
// };
//  console.log(sumSquareDifference(10));

// 3. Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.
// Функция должна вернуть наименьшее значение.
// Примеры:
// diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
// diff(0, 180) === 180;
// diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
// diff(120, 280) === 160;
// const diff = (a, b) => {
//   let one = Math.max(a,b) - Math.min(a,b);
//   let two = 360 - one;
//   return Math.min(one,two);
// }
// console.log(diff(0, 190));



// //2. Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК). Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
// let res = '';
// const dnaToRna = (str) => {
//   if (str !== '') { 
//   for (let i = 0; i < str.length; i += 1) {
//    if (str[i] === 'G') { res += 'C'}
//    else if (str[i] === 'C') { res += 'G'}
//    else if (str[i] === 'T') { res += 'A'}
//    else if (str[i] === 'A') { res += 'U'}
//    else {
//      res = null;
//      break;
//    }
//   }
// }
//   return res;
// };
// dnaToRna('CCGTA');
// console.log(res);


///1. Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
// let result = '';
// const invertCase = (str) => {
//   for (let i = 0; i < str.length; i += 1) {
//     const check = (str[i] === (str[i]).toUpperCase());
//     result += check ? (str[i]).toLowerCase() : (str[i]).toUpperCase();
//   }
//   return result;
// } ;
// invertCase('HeLLo, WorLd');
// console.log(result);


/////// Делает буквы заглавными перед пробелом (как я родил)
// let newStr = ' ';
// const solution = (str) => {
//   for (let i = 0; i < str.length; i += 1) {
//     if ((i == 0) && (str[0] !== ' ')) {
//       newStr += (str[0]).toUpperCase();
//       continue;
//     }
//     if ((str[i] == ' ') && (str[i+1] !== ' '))  {
//       newStr += str[i];
//       newStr += (str[i+1]).toUpperCase();
//       i += 1;
//       continue;
//      }
//   newStr += str[i];
//   }
// };
// solution(' many different words inside sentence');
// console.log(newStr);


// /////// Делает буквы заглавными перед пробелом (как надо было) не изменил length and toUpperCase
// export default (str) => {
//   let result = '';
//   for (let i = 0; i < length(str); i += 1) {
//     const shouldBeBig = (i === 0 || str[i - 1] === ' ');
//     result += shouldBeBig ? toUpperCase(str[i]) : str[i];
//   }
//   return result;
// };


/////// Складывание всех чисел в строке до тех пор, пока складывается
// const getSum = (str) => {            /////функция сложения чисел

//   let res = 0;
//     for (let i = 0; i < str.length ; i += 1) {
//       res += Number(str[i]);
//     }
//   return String(res);
// };
// const addDigits = (num) => {
//   let str = '';
//   str = String(num);      ////////переводим число в строку
//   if (num == 0) {return 0};   ////// если ноль выводим 0
//   if (num >= 10) {   /////если число больше 0 и длина строки больше 1
//     for (let i = str.length; i > 1;) {
//     str = getSum(str);                  //////подсчитаем сумму и перепишем str
//     i = str.length;                   /////обновим i = длине строки и прогоним снова если надо
//     }
//     return str;               //////возвращаем результат
//   }
// };
// console.log(addDigits(598997686567));


/////// Сравнение строк, где больше заглавных и символов
// const bigLettersCount = (str) => {
// const length = str.length;
// let count = 0;
//   for (let i = 0; i < length; i += 1) {
//    if ((str[i].toUpperCase() === str[i]) || (str[i].toUpperCase() == false)) {
//     count += 1;
//    }
//   }
//   return count;
// };
// const compare = (first,second) => {
//   const firstCount = bigLettersCount(first);
//   const secondCount = bigLettersCount(second);
//   return (firstCount > secondCount) ? 1 : (firstCount < secondCount) ? -1 : 0;
// }
// const greaterThan = (first, second) => (
//   compare(first, second) === 1);
// const lessThan = (first, second) => (
//   compare(first, second) === -1);
// const isEqual = (first, second) => (
//   compare(first, second) === 0);
//  if (greaterThan('AD', 'ad sd')) {console.log('true')};


///////// this
// const Manager = function(name, sales) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function(thing) {
//     this.sales += 1;
//     return "Manager " + this.name +" sold " + thing;
//   }
//   this.total = function() {
//    return this.name + " = " + this.sales;
//      }

// }
// const john = new Manager("John", 5);
// const mary = new Manager("Mary", 10);


// // //////////// Калькулятор через конструктор
// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//      this.value += Number(prompt("Число?", 0));
//   }  
// }
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value);


///////// Ступеньки this
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert(this.step );
//     return this;
//   }
// };
// ladder.up().up().down().showStep();


/////////////////// Калькулятор по работе this
// let calculator = {
//   read() {
//     this.a = Number(prompt("Введите а: ", 0));
//     this.b = Number(prompt("Введите b: ", 0));
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//      return this.a * this.b;
//   }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// //////////// Умножает все численные объекты на 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// const multiplyNumeric = (object) => {
//   for (let key in object) {
//    if (typeof (object[key]) == 'number') {
//      object[key] *= 2;
//    } 
//   }
//   console.log(menu);
// }
// multiplyNumeric(menu)


/////////// Сложение всех сумм объекта
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);


//////// Проверка в объекте
// const isEmpty = (object) => {
//  for (let key in object) {
//    return false;
//  }
//  return true;
// }

// let schedule = {};
// alert (isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert (isEmpty(schedule));


/////////// Выбирает меньшее из двух
// const min = (a, b) => {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(4, 1));


/////////// Задание Вывести шахматную доску x-y
// const showRow = (x, y) => {
//   for (var i = 1; i <= x; i += 1) {
//     if (x % i == 0) {
//       str = "";
//       for (var j = 1; j <= y; j += 1) {
//         str += " #";
//       }
//       console.log(str);
//     } else {
//       str = "";
//       for (var j = 1; j <= y; j += 1) {
//         str += "# ";
//       }
//       console.log(str);
//     }
//   }
// }
// showRow(3, 3);


/////////// Задание выстроить ёлочку из #
// const showSharp = (n) => {
//   let str = "";
//   for (let i = 1; i <= n; i += 1) {
//     str += "#";
//     console.log(str);
//   }
// }
// showSharp(7);


//////////////// Вычисление простого числа
// const isPrime = (number) => {
//   if (number < 2) {
//     return false;
//   }

//   for (let i = 2; i <= number / 2; i += 1) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };
// console.log(isPrime(25));