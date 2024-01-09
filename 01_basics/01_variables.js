const uniqueAccountId = 1
let firstName = 'Mukul';
var lastName = 'Padwal';
customerCity = 'Dalhousie';
let customerState;

// uniqueAccountId = 2; // Not allowed TypeError: Assignment to constant variable.

console.table([uniqueAccountId, firstName, lastName, customerCity, customerState]);


/*
NOTE : avoid using var keyword for declaring variables
Because of issue in block scope and functional scope
*/