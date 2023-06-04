const person = {
  firstName: "Muhammad",
  secondName: "Kahfi",
  get fullName() {
    return `${this.firstName} ${this.secondName}`;
  },

  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.secondName = array[1];
  },
  // function get yang di dalam objek cara mengaksesnya sama seperti cara mengakses objek
};

console.info(person.fullName);
person.fullName = "Budi Setiawan"; 
console.info(person.fullName);