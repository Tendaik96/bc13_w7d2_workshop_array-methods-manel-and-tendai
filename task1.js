const cats = ["tony", "daisy", "socks", "rockie"];

const capitalisedCats = cats.map((cat) => {
  const capitalisedCats = cat.toUpperCase();
  console.log(capitalisedCats);
  return capitalisedCats;
});
