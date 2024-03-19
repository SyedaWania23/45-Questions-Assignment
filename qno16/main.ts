 
 //example 16
 // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr:string []= ["Maryam","Aisha","Nada","Wania"];
let guestBegin:string="wasifa";
guestArr.unshift(guestBegin);
let middleGuest:string="Zubaida";
let middleIndex=guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest);
guestArr.push("Fatima");
console.log(guestArr);

guestArr.map((item)=>
console.log(`Salam ${item},I would like to inform you we have found a big table so invited 3 more guest for dinner.`));
