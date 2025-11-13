type RichPeopleVehicle = {
    bike: string ;
    car : string;
    ship: string;
}


type CheckVehicle <T> = T extends keyof RichPeopleVehicle ? true : false ;

type HasBike = CheckVehicle<"truck">


