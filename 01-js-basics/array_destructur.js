// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c); // Output: 1 2 3
// Extract first two fruits from ["apple", "banana", "mango"];

// const fruits = ["apple", "banana", "mango"];
// const [first, second] = fruits;
// console.log(first, second); // Output: apple banana

// const settings = { theme: "dark", fontSize: 14 };
// const { theme, fontSize, language = "en" } = settings;
// console.log(theme, fontSize, language);

// Extract both user names from:

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// const [user1, user2] = users;
// console.log(user1.name, user2.name); // Output: Alice Bob

const [{ name: name1 }, { name: name2 }] = users;
console.log(name1, name2);
