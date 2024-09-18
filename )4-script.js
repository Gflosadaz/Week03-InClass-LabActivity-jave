// Challege 1:
const arr = [1, 2, 3, 4, 5];
arr.push(0); 
arr.unshift(6);
arr.reverse(); 
console.log(arr); 

// Challege 2:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2.filter((item, index) => arr2.indexOf(item) === index && arr1.indexOf(item) === -1));
console.log(arr3);


