const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.
const names = new Set(
  data.map(function (entry) {
    return entry.name;
  })
);
// console.log(names);

// 2. Create a function that returns all the objects that are born before 1990.
const old = data.map(function (item) {
  if (Number(item.birthday.slice(-4)) < 1990) {
    return item;
  }
});
// console.log(old);

// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
const foods = data.map(function (entry) {
  return { meats: entry.favoriteFoods.meats, fish: entry.favoriteFoods.fish };
});

const meats = [...foods].map(function (food) {
  return food.meats;
});

const fish = [...foods].map(function (food) {
  return food.fish;
});
// console.log(meats);
// console.log(fish);
let numFoods;
