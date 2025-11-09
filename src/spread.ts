const friends = ['Rahim','Karim'];

const schoolFriends = ['pintu','chintu','bulbul'];

const collegeFriends = ['Mr smart','Mr very smart'];

friends.push(...schoolFriends);

// console.log(friends)

const user = {name: "Mezba", phoneNo : "0000000"};

const otherInfo = { hobby:"Outing", favouriteColor : "Black"};

const userInfo = {...user, ...otherInfo};
// console.log(userInfo)

// rest operator 

const sendInvitation = (...friends: string[]) =>{
    friends.forEach((friend: string) =>{
        console.log(`Send Invitation to ${friend}`)
    });
};
sendInvitation("pintu","chintu","bulbul","chulbul","keya")

