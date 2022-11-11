/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  // let count = 0;
  // var interval = setInterval(cb, delay)
  // for (let i = 1; i <= amount; i++) {
    // return function() {
      // amount--

      let interval = setInterval(() => {
        if (amount === 0) {
          clearInterval(interval)
        }
        cb()
        amount--
      }, delay)
      // console.log(interval);
      // clearInterval(interval)
      // console.log(clearInterval(interval));

    // }
 
  // }
  // clearInterval(interval)
  // console.log(clearInterval(interval));

}


// intervalCount(function() {
//   console.log('hi');
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}