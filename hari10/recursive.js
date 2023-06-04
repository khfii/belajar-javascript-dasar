function faktorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;

}

console.log(faktorial(5));

// penggunaan recursive function
function recursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * recursive(value - 1);
  }
}

console.log(recursive());
