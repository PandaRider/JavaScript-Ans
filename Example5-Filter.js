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


let small_animals = [];

for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        small_animals.push(animals[i])
    }
}

let small_animals = animals.filter((animal) => {
    return animal.size === "small"
})
