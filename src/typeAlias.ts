type User = {
  id: number;
  name: {
    firstName: string; 
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

// ✅ user1
const user1: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "X",
  },
  gender: "female",
  contactNo: "0145225",
  address: {
    division: "Bogura",
    city: "Bogura",
  },
};

// ✅ user2
const user2: User = {
  id: 456,
  name: {
    firstName: "Mr",
    lastName: "Y",
  },
  gender: "male",
  contactNo: "0145225",
  address: {
    division: "BoguraCCC",
    city: "BoguraCCCC",
  },
};

console.log(user1);
console.log(user2);


// Function
type AddFunc = (num1:number, num2: number) =>number;
const add:AddFunc = (num1,num2) => num1 + num2;