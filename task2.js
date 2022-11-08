let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = animals.filter(function (animals) {
  for (let i = 0; i < animals.length; i++) {
    return animals[i].charAt(0) === "b";
  }
});
console.log(bListAnimals);
