
// Fibonacci series with iteration
function fib(n) {
  let firstNum = 0;
  let secondNum = 1;
  let sequence = [];
  sequence.push(firstNum);
  sequence.push(secondNum);
  for (let i = 3; i <= n; i++) {
    let thirdNum = firstNum + secondNum;
    sequence.push(thirdNum);
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return sequence;
}



// Fibonacci series with recursion
function printFib(n) {
  let sequence = [];
  function recFib(iterator) {
    if (iterator <= 1) {
      return iterator;
    }
    else {
      return recFib(iterator - 1) + recFib(iterator - 2);
    }
  }
  for (let i = 0; i < n; i++) {
    sequence.push(recFib(i));
  }
  return sequence;
}