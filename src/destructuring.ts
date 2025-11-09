// Object Destructuring
const user = {
    name : {
        fristName : "Kamrun",
        middleName : "Naher",
        lastName : "keya"
    },
    gender : "female",
    favouriteColor: 'blue'
}

const {favouriteColor: myFavouriteColor, name:{middleName}} = user;
// console.log(myFavouriteColor,middleName)

// Array Destructuring

const friends = ["karim","Rahim","Mahim"];

const [ , , myBestFriend] = friends;

console.log(myBestFriend);