//example no 18
let countryName:string[]=["China","Africa","Berlin","Pakistan","America"];
console.log("Original order:",countryName);
console.log("alphabetical order:",[...countryName].sort());
console.log("Original order after sorting:", countryName);
console.log("Reverse alphabetical order:",[...countryName].sort() .reverse());
console.log("Original order after reverse sorting:", countryName);
countryName.reverse();
console.log("Reverse order:",countryName);
countryName.reverse();
console.log("back to the original order:",countryName);
countryName.sort();
console.log("sorted in alphabetical order:",countryName);
countryName.sort((a,b)=>b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",countryName);

