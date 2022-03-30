//map

const arr1 = [2, 3, 4, 5, 6, 6, 7];
const result1 = arr1.map((x) => x + x);
console.log(result1);

//filter

const arr2 = [2, 3, 4, 5, 6, 6, 7];
const result2 = arr2.filter((x) => x % 2 === 0);
console.log(result2);

//reduce

//lets see how we do it normally
const example = [2, 3, 4, 5, 6, 7, 8];
function sum(example) {
  let sum = 0;
  for (let i = 0; i < example.length; i++) {
    sum = sum + example[i];
  }
  return sum;
}
console.log(sum(example));

//now using reduce
//  const arr3=[2,3,4,5,6,7,8];
//  const result3= arr3.reduce(function(sum,arr3){
//     sum=sum+arr3;
//     return sum;
//  },0)
//  console.log(result3)

//arrow function
const arr3 = [2, 3, 4, 5, 6, 7, 8];
const result3 = arr3.reduce((sum, arr3) => (sum = sum + arr3),0);
console.log(result3);

//push
var arr5=[1,2,3];
arr5.push(4);
console.log(arr5);

//pop
var arr6=[1,2,3];
arr6.pop();
console.log(arr6);

//unshift
var arr7=[1,2,3];
arr7.unshift();
console.log(arr7);

//shift
var arr7=[1,2,3];
arr7.shift();
console.log(arr7);

//some
var arr =[2,3,4,5,6,7];
var result= arr.some((x)=>(x % 2 === 0))
console.log(result)

//every
var arr =[2,3,4,5,6,7];
var result= arr.every((x)=>(x % 2 === 0))
console.log(result)

//slice
var arr =[0,1,2,3,4,5];
var result= arr.slice(2,5)
console.log(result)

//splice
var arr =[0,1,2,3,4,5];
var result= arr.splice(1,5)
console.log(result)

//indexof
var arr = [2,3,4,5,6,3,7,2,3,4]

console.log(arr.indexOf(5));
var result = (arr.lastIndexOf(3));
console.log(result)
console.log(arr.indexOf(3,4)) //specific index arr.indexof(element,start value after element repeated)












