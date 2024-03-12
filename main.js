
const userPrompt = prompt(
    "What Froyo flavor would you like to order? Please enter your flavor, separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

// create a function called countFroyo
// that takes in a userPrompt 
const countFroyo = (userPrompt) => {
    // transform the user string input into an object
    const order = userPrompt.split(",");
    const orderObj = {};

    // let the flavor be the key
    // find a new unique flavor in the index, starting at 0 

    for (let i= 0; i < order.length; i++) {
        
        const flavor = order[i]

        // if a flavor from the index has not been added to the orderObj yet
        if (!orderObj[flavor]) {
            // add the index item to the object key
            orderObj[flavor] = 1;
        }
        // else, if the flavor already exists in orderObj
        else {
            // add it's count to it's total number
            orderObj[flavor]++;
        }
    }
    // in the console, show a table
    console.table (orderObj);
}

console.log(countFroyo (userPrompt));
