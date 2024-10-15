const accountId = 244
let accountEmail = "pankajbirla@gmail.com"
var accountPswd = "12345"
accountCity = "Indore"
let accountState;

//  accountId = 355 not allowed to change the constanst 
// console.log(accountId);

accountEmail = "pan@gmail.com"
accountCity = "Jaipur"
accountPswd = "345"

/*
prefer not to use var
because of issue in block scope and fuctional scope
*/
console.table([accountEmail, accountCity, accountPswd, accountState])

