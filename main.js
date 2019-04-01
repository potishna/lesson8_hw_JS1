//1
function convert(amount) {
 return amount*8 }
console.log(convert(2));//16
//or
let convert2 = amount2 => amount2 * 8
console.log(convert2(2));
//2
function reverse(str) {
 return str.split('').reverse().join('')
}
console.log(reverse('abc')) // 'cba
//or
let reverse2=str2=>str2.split('').reverse().join('')
console.log(reverse2('abc'));
//3
function printStairs(n) {
 let a='#'
 let result='';
 for (let index = 0; index < n; index++) {
   result = result+a;
   console.log(result);
 }
 return result;
}
printStairs(3);

//4

function sumRange(start, end) {
 let sumrange = start;
  for  (let index = start; index < end; index++) {
   sumrange += ++start;
   console.log(index,sumrange); // to see what will happen on the every next round
 }
 return sumrange;
}
console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5


//5
function min(a, b, c) {
  Math.min(a,b,c);
 console.log(Math.min(a,b,c));
}

min(10, 5, 11) // 5
min(3, 8, 4) // 3
//or
function min(a, b, c) {
   if (a < b && a < c){
    console.log(a);
  }
    else if (b < a && b < c){
    console.log(b);
  }
    else {
      console.log(c);
    }
}
min(10, 5, 11) // 5
min(3, 8, 4) // 3


//6
function renderPyramid(n) {
 for (let i = 0; i < n; i++) {
   let result = '';
   for (let j = 1; j < n-i; j++) {
     result = result + ' ';
   }
   for (let k = 1; k <= (2*i+1); k++) {
     result  = result  + '#';
   }
   console.log(result );
 }
}
renderPyramid(3)






