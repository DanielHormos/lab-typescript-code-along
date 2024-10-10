const dogs = ["Tax", "Golden Retrive", "puppy"];

const filledArray = new Array<null>(100).fill(null).map((_, i) => {
  return i;
});

const numbers = [1, 2, 3];

const lastElement = numbers[numbers.length - 1];

const indexOfValue2 = numbers.indexOf(2);

[{ name: "Daniel" }]
  .map((person) => {
    return { ...person, name: person.name.toUpperCase() };
  })
  .forEach((person) => {
    console.log(person);
  });
