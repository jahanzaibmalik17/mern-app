let val = 5;

function addVal(val) {
  console.log(val, "1");
  val ++;
  console.log(val, "2");
    return val;
}
val = addVal(val);
console.log(val, "3");

// let i = 5;

// function increment(n){

//   n++;
//   return n;
// }
// console.log('increment', increment(i))
// i=increment(i);
// console.log('i',i)