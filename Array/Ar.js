"use strict";
var arr;
arr = ["java", "c", "c++", "python", "javascript"];
arr.push("c#");
// let lang = arr.find((lang)=> lang.length>3);
// console.log(lang);
var deplist;
deplist = ["java", "c", "c++", "python", "javascript"];
var numlist;
numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numlist.filter(function (num) { return num % 2 == 0; });
console.log(result); // [2,4,6,8,10]
// let res = numlist.find((num)=> num%1==0);
// console.log(res);
var sum = numlist.reduce(function (num1, num2) { return num1 + num2; });
console.log(sum); // 55
var m = numlist.map(function (num) { return num * 2; });
console.log(m); // [2,4,6,8,10,12,14,16,18,20]
