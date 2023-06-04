/**
 * inner function
 * atau sebutan lainnya adalah function di dalam function
 * function yang ada di dalam hanya bisa diakses di dalam function yang dideklarasikan saja
 */

function person() {
  function sayHello() {
    console.log("Hello Kahfi");
  }

  sayHello();
}

person();
