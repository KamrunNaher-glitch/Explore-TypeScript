function addNormal(num1:number,num2:number) : number{
    return num1+num2;
}

const addArrow = (num1:number,num2:number) :number => num1 + num2;

addArrow(2,2)

// object => Function => Method

const poorUser = {
    name : "Mezba",
    balance : 0,
    addBalance(value: number) : number {
        const totalbalnce = this.balance + value;
        return totalbalnce
    }
}
poorUser.addBalance(1000);

const arr: number[] = [1,4,6];

const sqrArray = arr.map((elem:number):number => elem * elem);






