"use strict";

let arr : string[];
arr = ["java", "c", "c++", "python", "javascript"];
arr.push("c#");
let deplist : Array<string>;
deplist = ["java", "c", "c++", "python", "javascript"];

let numlist : Array<number>;
numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numlist.filter((num)=> num%2==0);
console.log(result);
