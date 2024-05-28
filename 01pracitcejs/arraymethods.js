let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]


let arr1 = [1, 2, 3];
let lastElement = arr.pop();
console.log(arr); // Output: [1, 2]
console.log(lastElement); // Output: 3


let arr2 = [1, 2, 3];
let firstElement = arr.shift();
console.log(arr); // Output: [2, 3]
console.log(firstElement); // Output: 1


let arr3 = [1, 2, 3];
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]

let arr4 = [1, 2];
let arr5 = [3, 4];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4]


let arr6 = [1, 2, 3, 4];
let slicedArray = arr.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]



let arr7 = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // Output: [1, 'a', 'b', 4]


let arr8 = [1, 2, 3];
arr.forEach(element => console.log(element * 2));
// Output: 2 4 6

let arr9 = [1, 2, 3];
let doubledArray = arr.map(element => element * 2);
console.log(doubledArray); // Output: [2, 4, 6]


let arr10 = [1, 2, 3, 4];
let evenArray = arr.filter(element => element % 2 === 0);
console.log(evenArray); // Output: [2, 4]


let arr11 = [1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10


let arr12 = [1, 2, 3, 4];
let sum1 = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10


let arr13 = [1, 2, 3];
let hasEven = arr.some(element => element % 2 === 0);
console.log(hasEven); // Output: true

let arr14 = [1, 2, 3];
let allPositive = arr.every(element => element > 0);
console.log(allPositive); // Output: true


let arr15 = [1, 2, 3];
let foundElement = arr.find(element => element > 1);
console.log(foundElement); // Output: 2


let arr16 = [1, 2, 3];
let foundIndex = arr.findIndex(element => element > 1);
console.log(foundIndex); // Output: 1


let arr17 = [1, 2, 3];
let index = arr.indexOf(2);
console.log(index); // Output: 1


let arr18 = [1, 2, 3, 2];
let lastIndex = arr.lastIndexOf(2);
console.log(lastIndex); // Output: 3


let arr19 = [1, 2, 3];
let contains = arr.includes(2);
console.log(contains); // Output: true


let arr20 = ['a', 'b', 'c'];
let str = arr.join('-');
console.log(str); // Output: a-b-c


let arr21 = [1, 2, 3];
arr.reverse();
console.log(arr); // Output: [3, 2, 1]


let arr22 = [3, 1, 4, 1, 2];
arr.sort();
console.log(arr); // Output: [1, 1, 2, 3, 4]

// For custom sorting
let arr23 = [3, 1, 4, 1, 2];
arr2.sort((a, b) => a - b);
console.log(arr2); // Output: [1, 1, 2, 3, 4]

let arr24 = [1, 2, 3];
arr.fill(0);
console.log(arr); // Output: [0, 0, 0]


