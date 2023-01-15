"use strict";

let arr : string[];
arr = ["java", "c", "c++", "python", "javascript"];
arr.push("c#");
let lang = arr.find((lang)=> lang.length>3);
console.log(lang);
let deplist : Array<string>;
deplist = ["java", "c", "c++", "python", "javascript"];

let numlist : Array<number>;
numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numlist.filter((num)=> num%2==0);
console.log(result);

let res = numlist.find((num)=> num%1==0);
console.log(res);