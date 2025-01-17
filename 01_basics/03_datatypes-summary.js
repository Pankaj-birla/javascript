 // Primitive

 // 7 types: String, Number, Boolean, undefined, Symbol, BigInt

    const score = 100
    const scoreVal = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail; // undefined

    const id = Symbol('123')
    const anotherId  = Symbol('123')

    console.log(id === anotherId);

    const bigNumer = 56151561616153211115123n 

 // Refrence (Non Primitive)

 // Arrays, Objects, Functions

  const heros = ["Superman", "Batman", "IronMan"]; // Array

  let myObj = { // Object
   name:"Pankaj",
   age: 22
  }

  // declaration of function     (return type of function is function object)
  const myFunction= function(){
   console.log(myObj);
  }

  //calling function
  myFunction();

  // return type of non-primitive is object 

  // https://262.ecma-international.org/5.1/#sec-11.4.3 for easy understanding