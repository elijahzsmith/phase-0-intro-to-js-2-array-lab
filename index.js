// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  const catsCopy = [...cats];
  catsCopy.splice(2, 1);
  return catsCopy;
}

function removeFirstCat() {
  const catsCopy = [...cats];
  catsCopy.splice(0, 1);
  return catsCopy;
}
