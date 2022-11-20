const cats = ["tony", "daisy", "socks", "rockie"];

const capitalisedCats = cats.map((cat) => {
  const capitalisedCat = cat.toUpperCase();
  console.log(capitalisedCat);
  return capitalisedCat;
});
