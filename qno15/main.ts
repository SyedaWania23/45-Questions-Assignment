// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
//example15 part 1 
let guestArr:string []= ["Maryam","Aisha","Nada","Wania"];
let denyForDinner=guestArr[0];
console.log(denyForDinner,"can't come for dinner")
guestArr.splice(0,1,"Noor");
guestArr.map((items)=>
console.log(`salam ${items},i would like to  invite you for dinner. 
 `));


