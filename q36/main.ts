// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string) {
    console.log(`you order a ${size} shirt that says "${message}".`);
}

make_shirt("medium", "nothing is impossible");
make_shirt("large", "Revenge");