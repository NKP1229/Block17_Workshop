// Complete the Numbers class below
// the constructor has already been provided
// in for objects, of for arrays
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    let count = 0;
    for (const num in this.data) {
      count++;
    }
    return count;
  }
  printNumbers() {
    //print the numbers in data
    console.log(this.data);
  }
  odds() {
    //return the odd numbers in data
    const oddNums = [];
    for (const num of this.data) {
      if (num % 2 !== 0) {
        oddNums.push(num);
      }
    }
    return oddNums;
  }
  evens() {
    //return the even numbers in data
    const evenNums = [];
    for (const num of this.data) {
      if (num % 2 === 0) {
        evenNums.push(num);
      }
    }
    return evenNums;
  }
  sum() {
    //return the sum of the numbers
    let sum = this.data.reduce((acc, current) => acc + current);
    return sum;
  }
  product() {
    //return the product of the numbers
    let product = this.data.reduce((acc, value) => acc * value);
    return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    const greater = [];
    this.data.forEach((index) => {
      if (index > target) {
        greater.push(index);
      }
    });
    return greater;
  }
  howMany(target) {
    //return the count of a given number
    let count = 0;
    this.data.forEach((index) => {
      if (index === target) {
        count++;
      }
    });
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
