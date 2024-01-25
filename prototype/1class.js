// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have ...The prototype chain

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}

console.log(Person("maruf", 34));
