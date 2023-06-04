/**
 * Saat kita menjalankan kode program javascript secara default kode program kit aberjalan dalam mode tidak aman
 * Dengan adanya strict mode beberapa pesan kesalahan akan selalu ditampilkan melalui throw error
 */

function useStrictMode() {
  "use strict";

  const person = {
    firstName: "Ashabul",
  };

  //   with (person) {
  //     console.log(firstName); => akan menyebabkan error pada mode strict
  //   }

  const { firstName } = person;
  console.log(firstName);
}

useStrictMode();
