const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 10
  },
  {
    name: "lion",
    size: "medium",
    weight: 150
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
]

// let animal_names = []
//
// for(let i=0; i<animals.length; i++){
//   animal_names.push(animals[i].name);
// }

let animal_names = animals.map({ name, size, weight} => {
  if (animal.weight > 100) return {
    name,
    size,
    weight: weight+10
  }
  else {
  return {
    name,
    size,
    weight
  }
}});
console.log(animal_names);
