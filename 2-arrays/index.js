/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
* Create 2 different arrays, and make them become one array with the different shoes types:
* Initialise variable 'shoes one' and add the following: sandals, boots, sneakers 
* Initialise variable 'shoes two' and add the following: shoes two: boat, vans, slippers
* Console log out shoes.
*/

var shoesOne = ["sandals","boots","sneakers"];
var shoesTwo = ["boat","vans","slippers"];

var shoes = shoesOne.concat(shoesTwo);

console.log(shoes); // [ 'sandals', 'boots', 'sneakers', 'boat', 'vans', 'slippers' ]



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * Initialise the variable `clothing list` to a 2-dimensions array (2-by-4):
 * The tshirt, dress, pants, skirt are for the 'women'.
 * The coat, jacket, waistcoat, suit are for the 'men'.
 * Console log out the variable.
 * Grab some values out of this array to create a sentence using concatenation.
 * Based on the chosen values, console log out the sentence (using backticks).
 * 
 * For this winter, I bought a big _coat_ and a _jacket_ that combines with my _tshirt_.
 */

var clothingList = [
    women = ["tshirt","dress","pants","skirt"],
    men = ["coat","jacket","waistcoat","suit"]
]

console.log(clothingList);
console.log(`For this winter, I bought a big ${clothingList[1][0]} and a ${clothingList[1][1]} that combines with my ${clothingList[0][0]} .`);
// For this winter, I bought a big coat and a jacket that combines with my tshirt.