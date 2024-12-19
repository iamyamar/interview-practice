//! 1. Flatten Array

// let arr = [1, 2, 3, 4, [5, 6, [7]], 8];

// Array.prototype.customFlat = function (depth = 1) {
//     let res = [];
//     function flatten(arr, currentDepth) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i]) && currentDepth < depth) {
//                 flatten(arr[i], currentDepth + 1);
//             } else {
//                 res.push(arr[i]);
//             }
//         }
//     }
//     flatten(this, 0);
//     return res;
// };

// console.log(arr.customFlat());
// console.log(arr.flat());

//! 2. Maximum number of repeating character in a string

let str = 'asdfasdfasdfasdfasdddddasdfsfff';

// function maxChar(str) {
//     let obj = {};
//     let max = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] in obj) {
//             obj[str[i]] = obj[str[i]] + 1;
//         } else {
//             obj[str[i]] = 1;
//         }
//     }
//     for (key in obj) {
//         if (obj[key] > max) {
//             max = obj[key];
//         }
//     }
//     return max;
// }

// function maxChar(str) {
//     let frequencyCounter = {};
//     // for (let )
//     // return str;
// }

// console.log(maxChar(str));

//! 3. Reverse String

// let str = 'asdfsdcasdfg';

// function reverseStr(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
//     // return str.split('').reverse().join('');
// }

// console.log(reverseStr(str));

//! 4. Calculate sum of all number

// function addUpto(n) {
//     var total = 0;
//     for (let i = 0; i < n; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(addUpto(5));

//! 5. Count all letters in a string

// let str = 'aaaafds  sdf';

// function count(str) {
//     let obj = {};
//     for (let char of str) {
//         obj[char] = ++obj[char] || 1;
//     }
//     return obj;
// }

// console.log(count(str));

// ? Frequency Counter

//! 6. Write a function same which accept 2 arrays. function should return true if every value in the array has its corresponding value squared in the second array

// let arr1 = [1, 2, 5, 0];
// let arr2 = [4, 1, 25, 0];

// // Not Good Solution -> Time Complexity -> O(n^2)
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let elem of arr1) {
//         let found = false;
//         for (let elem2 of arr2) {
//             if (elem ** 2 === elem2) {
//                 found = true;
//                 elem2 = null;
//                 break;
//             }
//         }
//         if (!found) {
//             return false;
//         }
//     }

//     return true;
// }

// // Best Solution -> Time Complexity -> O(n)

// function same2(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let elem of arr1) {
//         frequencyCounter1[elem] = ++frequencyCounter1[elem] || 1;
//     }
//     for (let elem of arr2) {
//         frequencyCounter2[elem] = ++frequencyCounter2[elem] || 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(same(arr1, arr2));
// console.log(same2(arr1, arr2));

//! 7. ANAGRAM - check if strings are anagram (i.e formed by rearranging the letters)

// let str1 = 'anagram';
// let str2 = 'nagrama';

// // Not Good Solution -> Time Complexity -> O(n^2)

// function anagram1(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     for (let char1 of str1) {
//         for (let char2 of str2) {
//         }
//     }
//     return true;
// }

// // Best Solution -> Time Complexity -> O(n)

// function anagram2(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let frequencyCounter = {};

//     for (let elem of str1) {
//         frequencyCounter[elem] = ++frequencyCounter[elem] || 1;
//     }
//     for (let elem of str2) {
//         if (!frequencyCounter[elem]) {
//             return false;
//         } else {
//             frequencyCounter[elem] -= 1;
//         }
//     }

//     return true;
// }

// console.log(anagram1(str1, str2));
// console.log(anagram2(str1, str2));

//! 8. 2Sum

// ? Multiple Pointers

//! 9. Given sorted array find the first pair where sum is zero

// let arr = [-3, -2, -1, 0, 1, 2, 3];

// // // Not Good Solution -> Time Complexity -> O(n^2)

// function sumZero(arr) {}

// // // Best Solution -> Time Complexity -> O(n)

// function sumZero2(arr) {
//     let first = 0;
//     let second = arr.length - 1;
//     while (first < second) {
//         let sum = arr[first] + arr[second];
//         if (sum === 0) {
//             return [arr[first], arr[second]];
//         } else if (sum > 0) {
//             second--;
//         } else {
//             first++;
//         }
//     }
// }

// console.log(sumZero(arr));
// console.log(sumZero2(arr));

//! 10. Count unique values in sorted array

// let arr = [-1, 0, 1, 2, 2, 3, 3];

// function countUniqueValues(arr) {
//     let first = 0;
// }

// console.log(countUniqueValues(arr));

// ? Divide and Conquer

//! 11. Given sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// let arr = [1, 2, 3, 5, 6, 7, 8, 9];

// // // // Not Good Solution -> Time Complexity -> O(n)

// function search(arr, index) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === index) {
//             return i;
//         }
//     }
//     return -1;
// }

// // // // Best Solution -> Time Complexity -> O(log n)

// function search2(arr, val) {
//     let min = 0;
//     let max = arr.length - 1;
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         let currentElement = arr[middle];

//         if (arr[middle] < val) {
//             min = middle + 1;
//         } else if (arr[middle] > val) {
//             max = middle - 1;
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }

// console.log(search(arr, 3));
// console.log(search2(arr, 3));

// ? Recursion

//! 12. write function to count till n numbers

// function countDown(num) {
//     if (num <= 0) {
//         console.log('All done!');
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(5);

//! 13. write function to sum range of number till num

// function sumRange(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// ? Helper Method Recursion

//! 14. Collect all the odd values in an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function collectOddValues(arr) {
//     let result = [];
//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0]);
//         }
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }

// console.log(collectOddValues(arr));

// ? Pure Recursion

//! 15. Collect all the odd values in an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function collectOddValues(arr) {
//     let newArr = [];

//     if (arr.length === 0) {
//         return newArr;
//     }
//     if (arr[0] % 2 !== 0) {
//         newArr.push(arr[0]);
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues(arr));

// ? Linear Search

//! 16. Linear Search
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function linearSearch(arr, val) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === val) return i;
//     }
//     return -1;
// }

// console.log(linearSearch(arr, 5));

//! 17. Binary Search
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(arr, val) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while (arr[middle] !== val && start <= end) {
//         if (val < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if (arr[middle] == val) {
//         return middle;
//     }
//     return -1;
// }

// console.log(binarySearch(arr, 6));

//! 18. Naive String Search - got total number of matches from short to long string

// function stringSearch(long, short) {
//     var count = 0;
//     for (var i = 0; i < long.length; i++) {
//         for (var j = 0; j < short.length; j++) {
//             if (short[j] !== long[i + j]) {
//                 break;
//             }
//             if (j === short.length - 1) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(stringSearch('lorie loled', 'lol'));

// ? Sorting

//! 19. Swapping

// function swapping(a, b) {
//     var temp = a;
//     a = b;
//     b = temp;
//     return { a, b };
// }

// console.log(swapping(5, 7));

//! 20. Bubble Sort

// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
//     var noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//                 noSwaps = false;
//             }
//         }
//         if (noSwaps) break;
//     }
//     return arr;
// }

// console.log(bubbleSort(arr));

//! 21. Selection Sort
// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[lowest] > arr[j]) {
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) swap(arr, i, lowest);
//     }
//     return arr;
// }

// console.log(selectionSort(arr));

//! 22. Insertion Sort
// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         var currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }

// console.log(insertionSort(arr));

//! 23. Merge Sort
// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function mergeSort(arr) {
//     return arr;
// }

// console.log(mergeSort(arr));

//! 24. Quick Sort
// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function mergeSort(arr) {
//     return arr;
// }

// console.log(mergeSort(arr));

//! 25. Radix Sort
// let arr = [10, 12, -3, 4, 5, 6, 7, 8];

// function mergeSort(arr) {
//     return arr;
// }

// console.log(mergeSort(arr));

// ? ES6 Classes

//! 26. Defining Class -> Class are blueprint to create objects
// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

// let firstStudent = new Student('Yash', 'Kumar', 33);
// console.log(firstStudent);

//! 27. Instance Methods
// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
//     fullName() {
//         return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
// }

// let firstStudent = new Student('Yash', 'Kumar', 33);
// console.log(firstStudent.fullName());

//! 28. Write code so this function returns correct value after operations -> calc.add(5).mult(2).sub(3).add(5).add(90).div(2)

// const calc = {
//     value: 0,
//     add(number) {
//         this.value += number;
//         return this;
//     },
//     mult(number) {
//         this.value *= number;
//         return this;
//     },
//     sub(number) {
//         this.value -= number;
//         return this;
//     },
//     div(number) {
//         this.value /= number;
//         return this;
//     },
//     getResult() {
//         return this.value;
//     },
// };
// console.log(calc.add(5).mult(2).sub(3).add(5).add(90).div(2).getResult());

// ? Linked List

//! 29. Linked List
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class SingleLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         var newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         var current = this.head;
//         var newTail = current;
//         while (current.next) {
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift() {
//         if (!this.head) return undefined;
//         var currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return currentHead;
//     }
//     unshift(val) {
//         var newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         var counter = 0;
//         var current = this.head;
//         while (counter !== index) {
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }
//     set(index, val) {
//         var foundNode = this.get(index);
//         if (foundNode) {
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val) {
//         if (index < 0 || index > this.length) return false;
//         if (index === this.length) return !!this.push(val);
//         if (index === 0) return !!this.unshift(val);

//         var newNode = new Node(val);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }
//     remove(index) {
//         if (index < 0 || index >= this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();
//         var prevNode = this.get(index - 1);
//         var removed = prevNode.next;
//         prevNode.next = removed.next;
//         this.length--;
//         return removed;
//     }
//     reverse() {
//         var node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         var next;
//         var prev = null;
//         for (var i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }
// }

// var list = new SingleLinkedList();
// list.push('Hello');
// list.push('my');
// list.push('name');

// ? Doubly Linked List

//! 29. Doubly Linked List
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }
// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         var newNode = new Node(val);
//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         var poppedHead = this.tail;
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = poppedHead.prev;
//             this.tail.next = null;
//             poppedHead.prev = null;
//         }
//         this.length--;
//         return poppedNode;
//     }
//     shift() {
//         if (this.length === 0) return undefined;
//         var oldHead = this.head;
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = oldHead.next;
//             this.head.prev = null;
//             oldHead.next = null;
//         }
//         this.length--;
//         return oldHead;
//     }
//     unshift(val) {}
//     get(index) {}
//     set(index, val) {}
//     insert(index, val) {}
//     remove(index) {}
// }

// var list = new DoublyLinkedList();
// list.push('Hello');
// list.push('my');
// list.push('name');

// ? Stack

//! 30. Stack - Array & Linked List

// push pop together are example of Stack similarly shift unshift

// ? Queue

//! 31. Queue - Array & Linked List

// push with shift together are example of Queue similarly pop with unshift

// ? Some Output based question

//! 32. Guess Output

// console.log(a); -> undefined
// console.log(b); -> Reference error
// var a = (b = 5);

//! 33. Guess Output

// var a = 5;
// console.log(a++); -> 5
// console.log(a); -> 6

//! 34. Guess Output

// var a = 5;
// console.log(a++); -> 5
// console.log(a); -> 6

//! 35. Guess Output

// console.log(1 < 2 < 3); -> true
// console.log(3 > 2 > 1); -> false

//! 36. Guess Output

// const foo = () => {
//     console.log(this.name);  -> undefined
// };
// foo.call({ name: 'John' });

//! 37. Guess Output

// const foo = function () {
//     console.log(this.name);   -> John
//     const bar = () => {
//         console.log(this.name); -> John
//     };
//     bar();
// };
// foo.call({ name: 'John' });

//! 38. Guess Output

// const foo = function () {
//     console.log(this.name);   -> John
//     const bar = () => {
//         console.log(this.name); -> John
//     };
//     bar();
// };
// foo.call({ name: 'John' });

// ? Trees

//! 39. Binary Search Tree

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         var newNode = new Node(value);
//         if (this.root === null) {
//             this.root = newNode;
//             return this;
//         } else {
//             var current = this.root;
//             while (true) {
//                 if (value === current.value) return undefined;
//                 if (value < current.value) {
//                     if (current.left === null) {
//                         current.left = newNode;
//                         return this;
//                     } else {
//                         current = current.left;
//                     }
//                 } else if (value > current.value) {
//                     if (current.right === null) {
//                         current.right = newNode;
//                         return this;
//                     } else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
//     }
//     find(value) {
//         if (this.root === null) return false;
//         var current = this.root;
//         found = false;
//         while (current && !found) {
//             if (value < current.value) {
//                 current = current.left;
//             } else if (value > current.value) {
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }
//         return current;
//     }
//     contains(value) {
//         if (this.root === null) return false;
//         var current = this.root;
//         found = false;
//         while (current && !found) {
//             if (value < current.value) {
//                 current = current.left;
//             } else if (value > current.value) {
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//         return false;
//     }
//     BFS() {}
//     DFSPreOrder() {}
//     DFSPostOrder() {}
//     DFSInOrder() {}
// }

// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);

// ? Trees

//! 39. Binary Search Tree

// ? Heaps

// ! 40. Max Binary Heaps
// ! 41. Min Binary Heaps

// ! 42. Priority Queue

//  ? Hash

// ! 43. Create a hash function that take string as input and return hash
// function hash(key, arrayLen) {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// console.log(hash('pink', 10));

//  ! 44. Hash Function Class

//  ? Graphs

// ! 45.

// ? Polyfill Questions

// ! Create a polyfill for qroupby function of lodash

// Array.prototype.groupBy = function (...args) {
//     let callbackfn = args[0];
//     return this.reduce((result, currentItem) => {
//         const key = callbackfn(currentItem);
//         if (!result[key]) {
//             result[key] = [];
//         }
//         result[key].push(currentItem);
//         return result;
//     }, {});
// };

// console.log(
//     [{ age: 21 }, { age: 21 }, { age: 22 }].groupBy((elem) => elem.age)
// );

// ! Create a polyfill for forEach method of Array

// let arr = [34, 56, 64, 23, 443, 222, 22];

// Array.prototype.customForEach = function (...args) {
//     let callFn = args[0];
//     for (let i = 0; i < this.length; i++) {
//         callFn(this[i], i, this);
//     }
// };

// console.log(arr.customForEach((elem) => console.log(elem)));

// ! Create a polyfill for map method of Array

// let arr = [34, 56, 64, 23, 443, 222, 22]

// Array.prototype.customMap = function (...args) {
//     let res = [];
//     let callFn = args[0];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callFn(this[i], i, this));
//     }
//     return res;
// };

// console.log(arr.customMap((elem) => elem + 5));

// ! Create a polyfill for filter method of Array

// let arr = [34, 56, 64, 23, 443, 222, 22];

// Array.prototype.customFilter = function (...args) {
//     let res = [];
//     let callFn = args[0];
//     for (let i = 0; i < this.length; i++) {
//         if (callFn(this[i], i, this)) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// };

// console.log(arr.customFilter((elem) => elem < 50));

// ! Create a polyfill for reduce method of Array

// let arr = [30, 30];
// const data = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
// ];
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

// Array.prototype.customReduce = function (...args) {
//     let callFn = args[0];
//     var acc = args[1] || undefined;
//     for (let i = 0; i < this.length; i++) {
//         if (acc !== undefined) {
//             acc = callFn.call(undefined, acc, this[i], i, this);
//         } else {
//             acc = this[i];
//         }
//     }
//     return acc;
// };

// console.log(arr.customReduce((acc, elem) => acc + elem, 0));
// console.log(
//     data.customReduce((acc, elem) => {
//         acc.push(elem.name);
//         return acc;
//     }, [])
// );
// console.log(
//     fruits.customReduce((acc, elem) => {
//         acc[elem] = (acc[elem] || 0) + 1;
//         return acc;
//     }, {})
// );

// ? JS Practice Questions

// ! Input -> computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
// ! Output -> 143545000

// function computeAmount() {
//     let total = 0;

//     function addAmount(value, factor) {
//         total += value * factor;
//         return obj;
//     }

//     const obj = {
//         lacs(value) {
//             return addAmount(value, 100000);
//         },
//         crore(value) {
//             return addAmount(value, 10000000);
//         },
//         thousand(value) {
//             return addAmount(value, 1000);
//         },
//         value() {
//             return total;
//         },
//     };

//     return obj; // Return the object with methods
// }

// const result = computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value();

// console.log(result);

// ? Constructor function and Classes

// ! Class are syntactic sugar for JS Constructor function used to create objects

// ! Creating Constructor function

// const Person = function (firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.calcAge = function () {
//         return 2024 - birthYear;
//     };
// };

// const person1 = new Person('Yash', 'Kumar', 2000);

// console.log(person1.calcAge());

// ! reusing method in  Constructor function

// const Person = function (firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     return 2024 - this.birthYear;
// };

// const person1 = new Person('Yash', 'Kumar', 2000);

// console.log(person1.calcAge());

// ! Creating class

// class Person {
//     constructor(firstName, lastName, birthYear) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         return 2024 - this.birthYear;
//     }
// }

// const john = new Person('John', 'Doe', 1990);
// console.log(john);
// console.log(john.calcAge());

// ! Debounce

// function debounce(fn, d) {
//     let timer;
//     return function (...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => fn.apply(this, args), d);
//     };
// }

// ! Throttle

// function throttle(fn, limit) {
//     let isThrottle;
//     return function (...args) {
//         if (!isThrottle) {
//             fn.apply(this, args);
//             isThrottle = true;
//             setTimeout(() => {
//                 isThrottle = false;
//             }, limit);
//         }
//     };
// }

// ! Memoize

// function memo(fn) {
//     let map = {};
//     return function (...args) {
//         let n = JSON.stringify(args);
//         for (n in map) {
//             return map[n];
//         }
//         let result = fn(...args);
//         map[n] = result;
//         return result;
//     };
// }

// ! Polifill for bind

// Function.prototype.myBind = function (fn, ...args1) {
//     let obj = this;
//     return function (...args2) {
//         return fn.apply(obj, [...args1, ...args2]);
//     };
// };

// ! Polifill for Reduce

// Array.prototype.customReduce = function (...args) {
//     let fn = args[0];
//     let acc = args[1] === undefined ? undefined : args[1];
//     for (let i = 0; i < this.length; i++) {
//         if (acc !== undefined) {
//             acc = fn.call(undefined, acc, this[i], i, this);
//         } else {
//             acc = this[i];
//         }
//     }
//     return acc;
// };

// ! Polifill for Filter

// Array.prototype.customFilter = function (...args) {
//     let fn = args[0];
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//         if (fn(this[i], i, this)) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// };

// ! Implement Promise.any

// let prom1 = new Promise((res) => setTimeout(res('ok'), 1000));
// let prom2 = new Promise((res) => setTimeout(res('okk'), 2000));
// let prom3 = new Promise((res) => setTimeout(rej('no'), 3000));

// function customPromise() {}

// Promise.all([prom1, prom2, prom3]).then((res) => console.log(res));

// ? https://leetcode.com/discuss/study-guide/4788101/Frontend-PSDS-Round questions solved

// ! 1. Implement deep cloning of an object
let obj = {
    name: 'Yash',
    age: 24,
    address: {
        city: 'New Delhi',
        country: 'India',
        obj: {
            first: 'asdf',
        },
    },
};

function deepCloning(obj) {
    let res = {};
    for (key in obj) {
        if (typeof obj[key] === 'object' && typeof obj[key] !== null) {
            res[key] = deepCloning(obj[key]);
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}

console.log(deepCloning(obj));

// ! 2. Check if objects are deeply equal or not
// ! 3. Reverse the string without reversing special char
// ! 4. Flat deeply nested object with any special keyword
// ! 5. Combine two sorted array in first array/new array
// ! 6. Currying/ Infinite currying
// ! 7. JSON.stringify with predefined delimeter
// ! 8. JSON.parse with that delimeter used in JSON.stringify
// ! 9. Implement Array flat function
// ! 10. Polyfill for call/apply/bind
// ! 11. Check for valid parentheses
// ! 12. Check if object has cycle or not
// ! 13. Polyfill for map/filter/reduce/forEach
// ! 14. Polyfill for promise.all/any/race/allsettled

// let prom1 = new Promise((res, rej) => res('ok1'));
// let prom2 = new Promise((res, rej) => res('ok2'));
// let prom3 = new Promise((res, rej) => rej('ok3'));

// Promise.customAll = function (args) {
//     let result = new Array(args.length);
//     let totalPromiseResolved = 0;

//     return new Promise((resolve, reject) => {
//         args.forEach((elem, index) => {
//             elem.then((re) => {
//                 result[index] = re;
//                 totalPromiseResolved++;
//                 if (totalPromiseResolved == args.length) {
//                     resolve(result);
//                 }
//             }).catch((err) => {
//                 reject(err);
//             });
//         });
//     });
// };

// Promise.customAll([prom1, prom2, prom3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => console.log(err));

// ! 15. Polyfill for setTimeout/clearTimeout
// ! 16. Polyfill for setInterval/clearInterval
// ! 17. Polyfill for splice/unshift
// ! 18. Add all the number in deeply nested object
// let data = {
//     a: {
//         a: 'a',
//         b: 1,
//     },
//     b: {
//         b: 10,
//     },
//     c: {
//         c: {
//             e: 'e',
//             b: {
//                 c: 'c',
//                 a: 1,
//             },
//         },
//     },
// };

// let sum = 0;
// function getSum(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             getSum(obj[key]);
//         } else if (typeof obj[key] === 'number') {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

// console.log(getSum(data));

// ? Sonia Bhabhi Questions

//! 1. Find frequency of each element in array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1];

// const frequencyCounter = (arr) => {
//     let map = {};
//     for (let elem of arr) {
//         map[elem] = map[elem] + 1 || 1;
//     }
//     return map;
// };

// console.log(frequencyCounter(arr));

//! 2. Print duplicate element in array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1];

// const printDuplicate = (arr) => {
//     let map = {};
//     let res = [];
//     for (let elem of arr) {
//         map[elem] = map[elem] + 1 || 1;
//     }
//     for (let key in map) {
//         if (map[key] > 1) {
//             res.push(key);
//         }
//     }
//     return res;
// };

// console.log(printDuplicate(arr));

//! 3. Print element of an array in reverse order

// let arr = [1, 2, 3, 4, 1, 2, 3, 1];

// const reverseArray = (arr) => {
//     let res = [];
//     for (let x = arr.length - 1; x >= 0; x--) {
//         res.push(arr[x]);
//     }
//     return res;
// };

// console.log(reverseArray(arr));

//! 4. Print largest element of an array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1];

// const largestElement = (arr) => {
//     let max = arr[0];
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x] > max) {
//             max = arr[x];
//         }
//     }
//     return max;
// };

// console.log(largestElement(arr));

//! 5. Print smallest element of an array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1, -5];

// const smallestElement = (arr) => {
//     let min = arr[0];
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x] < min) {
//             min = arr[x];
//         }
//     }
//     return min;
// };

// console.log(smallestElement(arr));

//! 6. Print sum of all items of the array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1, 5];

// const sum = (arr) => {
//     let total = 0;
//     for (let x = 0; x < arr.length; x++) {
//         total += arr[x];
//     }
//     return total;
// };

// console.log(sum(arr));

//! 7. Sort the element of array in ascending order

// let arr = [1, 2, 3, 4, 1, 2, 3, 1, 5];

// const sort = (arr) => {
//     for (let x = 0; x < arr.length - 1; x++) {
//         for (let j = 0; j < arr.length - 1 - x; j++) {
//             console.log(j, j + 1);
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// };

// console.log(sort(arr));

//! 8. First second largest element in an array

// let arr = [1, 2, 3, 4, 1, 2, 3, 1, 5, 5];

// const secondLargestElem = (arr) => {
//     let max = -Infinity;
//     let secondMax = -Infinity;
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x] > max) {
//             secondMax = max;
//             max = arr[x];
//         }
//     }
//     return secondMax;
// };

// console.log(secondLargestElem(arr));

//! 9. First second smallest element in an array

// let arr = [5, 1, 2, 3, 4, 1, 2, 3, 1, 5, 5];

// const secondSmallestElem = (arr) => {
//     let min = +Infinity;
//     let secondMin = +Infinity;
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x] < min) {
//             secondMin = min;
//             min = arr[x];
//         } else if (arr[x] < secondMin && arr[x] !== min) {
//             secondMin = arr[x];
//         }
//     }
//     return secondMin;
// };

// console.log(secondSmallestElem(arr));

//! 10. Print odd and even number from an array

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const printOddEvenNumber = (arr) => {
//     let evenNumber = [];
//     let oddNumber = [];
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x] % 2 === 0) evenNumber.push(arr[x]);
//         else oddNumber.push(arr[x]);
//     }
//     return { evenNumber, oddNumber };
// };
// console.log(printOddEvenNumber(numbers));

//! 11. Remove all white space in a string

// let data = 'my name is yash';

// const removeWhiteSpace = (str) => {
//     let res = '';
//     for (let x = 0; x < str.length; x++) {
//         if (str[x] !== ' ') {
//             res += str[x];
//         }
//     }
//     return res;
// };
// console.log(removeWhiteSpace(data));

//! 12. Program to count number of words in string

// let data = 'my name is yash';

// const countWords = (str) => {
//     return str.split(' ').length;
// };
// console.log(countWords(data));

//! 13. Program to check weather a string is palindrome

// let string = 'racecar';

// const checkPalindrom = (str) => {
//     return str === str.split('').reverse().join('');
// };
// console.log(checkPalindrom(string));

//! 14. Reverse String

// let string = 'racecars';

// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };
// console.log(reverseString(string));

//! 15. Remove leading zeros

// let string = '000434304';

// const removeZero = (str) => {
//     return str.split('').reverse().join('');
// };
// console.log(removeZero(string));

//! 16. Print first letter of each word in string
//! 17. Given a string s. find length of the longest substring without repeating character
//! 18. Calculate factorial of a number
//! 19. Generate the first n number in the fibonacci sequence
//! 20. Write a program to check if a given number is prime
//! 21. Determine if 2 strings are anagram of each other
//! 22. Implement sorting algorithm -> Bubble sort, quick sort & merge sort
//! 23. Implement binary search to find element in sorted array
// ! 24. Code for overriding and overloading -> skip java concept
//! 25. Find max and min from an array
//! 26. Average of all prime numbers in a given range
//! 27. Remove duplicates from an array
//! 28. String comparison input = "aabbcdaav" output = "a2b2c1d2a2v1"
//! 29. Find word occurrences str = "I am Java developer I am prodit" output = {Java:1,Prodit:1,I:2 ...}
//! 30. Character occurrences in string. Input : Pratima -> Output : P:1, r:1, a:1 ..
//! 31. Find common elements in arrays. [1,2,3,2,1] , [1,2,3], [1,2,3,4] -> [1,2,3]
//! 32. Find 3rd largest element using bubble sort
//! 33. Print Patterns
//! *
//! **
//! ***
//! ****
//! 34. WAP to merge two sorted arrays
//! 35. Number 1 - 100 will be flashed on the screen only once & you must find the missing numbers
//! 36. WAP to srt array in descending order
//! 37. Given an array of string. Group the string that are anagram of each other
//! Input = ["eat","tea","tan","ate","nat","bat"] -> Output = [["eat","tea","ate"],["tan","nat"],["bat"]]
//! 38. Given an array of integers. find the largest number that does not have any duplicates in the array
//! 39. WAP, where each occurrence of letter "O" is replaced with increasing number of dollar signs $ Input = "Go to joho" Output -> "G$t$$j$$$h$$$$"
//! 40. Remove duplicate character from string
//! 41. Program remove send highest element from hashmap
//! 42. program to generate prime no between 1 and given number
//! 43. How to find missing values from a sorted array
//! 44. Program Input name, middle name & surname of person, print only initials
//! 45. Program to print all treemap element
//! 46. Program to find sum of array & missing numbers from array
//! 47. WAP for the largest number from 3 number
//! 48. WAP to find factorial for positive and negative number
