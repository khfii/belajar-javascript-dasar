/**
 * Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
 * Kekurangan arrow function
 * 1. tidak memiliki fitur argument objek
 * 2. tidak bisa menggunakan function generator
 * 3. tidak bisa mengakses this
 * 4. tidak bisa mengakses super
 */

/**
 * penulisan arrow function
 * const, let nameType = (arg) => {statement};
 *
 */

// arrow function sama dengan function sebagai value
const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.log(say);
};

let recursive = (value) => {
  let result = 1;
  if (value === 1) {
    return result;
  } else {
    result = value * recursive(value - 1);
    return result;
  }
};

/**
 * recursive(3)
 * result = 3 * recursive(2) = 6
 */

sayHello("Kahfi");
