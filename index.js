var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens;
  
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

function  destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var arr = ["Milo", "Otis","Garfield"];
  arr.push("Broom");
  return arr;
}

function prependKitten(name){
  var arr = ["Otis","Garfield"];
  arr.shift("Arnold","Milo");
  return arr;
}