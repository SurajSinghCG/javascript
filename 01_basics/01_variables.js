const accountId = 12345
let accountEmail = "suraj@gmail.com"
var accountPassword = "12345"
accountCity = "blr"
let accountState;

// accountId = 2  // not allowed
accountEmail = "srs@gmail.com"
accountPassword = "456"
accountCity = "Bengaluru"

console.table([accountEmail,accountPassword,accountCity,accountState]);
/* 
prefer not to use var
because of issue in block scope and functional scope
*/