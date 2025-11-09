// let userName: string = "keya014";
 
// let userId = 123;
// userId.toFixed(123);

// let isAdmin : boolean = false ;
// isAdmin = true;

// let x : undefined = undefined;

// // Non Primitive 
// let bazarList: string[] = ["eggs","milk","sugar"];

// // bazarList.push(true)
//  let mixArr: (string | number) [] = ["eggs",12, "milk",1, "sugar",2];

//  mixArr.push(true)

// Ts Toople

// let couple : [string,string] = ["husband","wife"];

// let destination : [string,string,number] = ["Dhaka","CTG",3]

// Reference Type : Object 

// const user: {
//     fristName : string;
//     middleName ? : string;
//     lastName : string;
//     isMarried : boolean;
//     organization : "Programming Hero"; 
//     // value => type: Litaral types
// } = {
//     fristName : "Kamrun",
//     middleName: "Naher",
//     lastName: "keya",
//     isMarried: true,
//     organization: "Programming Hero"
// }
// user.organization = "Programming Hero";
// console.log(user.organization)

const user: {
    fristName : string;
    middleName ? : string;
    lastName : string;
    isMarried : boolean;
 readonly organization : string; 
    // value => type: access modifires
} = {
    fristName : "Kamrun",
    middleName: "Naher",
    lastName: "keya",
    isMarried: true,
    organization: "Programming Hero"
}
// user.organization = "Programming Hero";
console.log(user.organization)

