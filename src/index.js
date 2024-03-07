import "./style.scss";
import includeExample from "./includeExample";

console.log(includeExample([1, 2, 3], 1));
const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};
//ES7 Object spread example
const elvenGauntletRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};
console.log("ES7 Object spread example", elvenGauntletRecipe);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

async function main() {
  const value = await myPromise;
  console.log(value);
}
main();
