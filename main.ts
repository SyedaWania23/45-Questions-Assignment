//example 2
let personName: string = "Eric";
console.log(`hello ${personName}, would you like to learn some Python today?”`);
//example 3
// lowercase
let personName: string ="Wania"
console.log("lowercase:", personName.toLowerCase());


// uppercase
console.log("uppercase:", personName.toLocaleUpperCase());


// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));