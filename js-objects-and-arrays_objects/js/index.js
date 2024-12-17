console.clear();

// EXERCISE 1
// Create an object `personWithNameAgeEmail` with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name : "Ben ansah",
  age : 34,
  email : "bengelansah@hotmail.com",
  
};

// EXERCISE 2
// Set the values of `nameOfAlex` and `ageOfAlex` to match the corresponding values in the `personAlex` object.

const personAlex = {
  name: "Alex",
  age: 24,
};
const nameOfAlex = personAlex.name;
console.log(nameOfAlex);
const ageOfAlex = personAlex.age;
console.log(ageOfAlex);

// EXERCISE 3
// Change the `name` to "Alex" and `age` to "35" by updating the `personToChange`object: `person.existingProperty = newValue`.

const personToChange = {
  name: "Kim",
  age: 24,
};
personToChange.name = "Alex",
console.log("name", personToChange.name );
personToChange.age = 35,
console.log("age", personToChange.age );

// EXERCISE 4
// Add the properties `age` with value "5" and `breed` with value "husky" to the `petPluto` object: `pet.newProperty = newValue`.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
console.log(petPluto);
petPluto.breed = "husky";
console.log(petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
