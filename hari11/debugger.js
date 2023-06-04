function createFullName(firstName, middleName, lastName) {
  // menambahkan kode debugger
  debugger;
  const fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}

const fullName = createFullName("Ashabul", "Kahfi");
console.log(fullName);
