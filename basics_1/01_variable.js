const accountId = 144553
let accountEmail = "jhil@google.com"
var accountPassword = "12345"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Asansol"
let accountState; // it will return undefined because no value is defined in this vaiable//

console.log(accountState)

// accountId = 2 // not allowed because it is already defined a const value

2
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

let myNameArray = ["Chris", "Bob", "Jim"]; 
/* An array is a single object that contains multiple values
enclosed in square brackets and separated by commas. */

//Once these arrays are defined, you can access each value by their location within the array.

console.log (myNameArray[0]); // should return 'Chris'

