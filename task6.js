const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

//6a
const byOrder = broomCupboard.sort((a, b) => {
  return a - b;
});
console.log(byOrder);

//6b
const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const byShelfOrder = potions.sort((a, b) => {
  return b.shelf - a.shelf;
});
console.log(byShelfOrder);

//6c
const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

const compareStrings = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
};

const compare = (a, b) => {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA[splitA.length - 1];
  const lastB = splitB[splitB.length - 1];

  return lastA === lastB
    ? compareStrings(splitA[0], splitB[0])
    : compareStrings(lastA, lastB);
};
students.sort(compare);
console.log(students);
