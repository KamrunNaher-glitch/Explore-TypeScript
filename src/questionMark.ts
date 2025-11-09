// const biyerjonnoEligible = (age:number) =>{
// //     if(age >=21){
// //     console.log("You are eligible")
// // }else  {
// //     console.log("You are not elegible")

// // }
//  const result = age >= 21 ? "You ar eligible" : "You are not eligible";
//  console.log(result)
// }

// biyerjonnoEligible(22)

const userTheme = undefined ;

const selectedTheme = userTheme ?? "Light Theme";

// console.log(selectedTheme)

const isAuthenticated = null;

const resultWithTernary = isAuthenticated ? isAuthenticated : "U r guest";

const resultWithNulish = isAuthenticated ?? "U are guest";

// console.log ({resultWithTernary},{resultWithNulish})


// optional Chaining 

const user :{
    address:{
        city: string;
        town : string;
        postalCode ? : string
    };   
} = {
    address :{
        city:"Dhaka",
        town: "Bonani"
    },
};

const postalCode = user.address.postalCode;
console.log(postalCode)

