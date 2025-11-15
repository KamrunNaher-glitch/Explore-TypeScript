type RichPeoplesVehicle = {
    car : string;
    bike: string ;
    cng: string ;  
};

type MyVehicle =  "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;


// const myName  = user.name;
// const myId = user["id"];


// key of Constant

type User ={
    id : number;
    name: string ;
    address: {
        city: string;
    };
};

const user : User = {
    id: 222,
    name:"keya",
    address: {
        city : "ctg"
    }
}
  
const getPropertyFromObj = <X> (obj:X,key: keyof X) =>{
    return obj[key]
}

const product = {
    brand:"HP"
}

const result1 = getPropertyFromObj(user,"name");

const result2 = getPropertyFromObj(product,"brand")




