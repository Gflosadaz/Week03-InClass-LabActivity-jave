// 1 calcultate the average 
const marks = [85, 97, 44, 37, 76, 60];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(averageMarks); // Output: 66.5

// 2 Apply 10%
const prices = [250, 645, 300, 900, 50];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Output: [225, 580.5, 270, 810, 45]

// 3 Manipulate the arrey
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company from the array
companies.shift();
console.log(companies); // Output: ["Microsoft", "Uber", "Google", "IBM", "Netflix"]

// b. Remove Uber & Add Ola in its place
const index = companies.indexOf("Uber");
if (index !== -1) {
  companies.splice(index, 1, "Ola");
}
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix"]

// c. Add Amazon at the end
companies.push("Amazon");
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]
