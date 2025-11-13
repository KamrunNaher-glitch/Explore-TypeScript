type Student = {id:number; name:string; dateOfBirth : string ; class: string}

const addStudentToCourse = <T extends Student> (studentInfo: T) =>{
    return {
        course: "Next Level",
        ...studentInfo
    };
};

const student1 = {
    id: 123,
    name: "keya",
    haspen:true,
}

const student2 = {
    id: 321,
    name: "keyaJerry",
    hasCar: true,
    isMarried: true,
}

const student3 = {
    id :444,
    name:"karim",
    hasWatch : true,
    dateOfBirth : "20-05-2020",
    class: "1",

}

const result = addStudentToCourse(student3);
console.log(result)