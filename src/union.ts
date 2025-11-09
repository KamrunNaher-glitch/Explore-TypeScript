// union 
type UserRole = 'admin'| 'user';

const getDashboard = (role: UserRole) =>{
    if(role === "admin"){
        return "Admin Dashboard";
    }else if (role === "user"){
        return "user Dashboard"
    }else {
        return "guest Dashboard"
    }
};

// getDashboard("admin")

// Intersection 

type Employee = {
    id: string;
    name:string;
    phoneNo : number;
}

type Manager = {
    designation : string;
    teamSize : number;
}
type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager = {
    id: '123',
    name : "Chowdhury Shaheb",
    phoneNo: 12233,
    designation:'manager',
    teamSize : 20

};

    

