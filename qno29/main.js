"use strict";
//example29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// // • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favourite_fruit = ["Berries", "Guava", "Grapes"];
if (favourite_fruit.includes("Berries")) {
    console.log("I like Berries");
}
if (favourite_fruit.includes("Guava")) {
    console.log("I like Guava");
}
if (favourite_fruit.includes("Grapes")) {
    console.log("I like Grapes ");
}
if (favourite_fruit.includes("Apples")) {
    console.log("I really like Apples");
}
if (favourite_fruit.includes("Mango")) {
    console.log("I like Mango");
}
