const marvel = ["thor", "captain", "pool"]
const dc = ["sups", "bat", "flash"]

// marvel.push(dc)
// console.log(marvel);

//  const newHero = marvel.concat(dc)
//  console.log(newHero);
 
// const newHero = [...marvel, ...dc]
// console.log(newHero)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
