// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// let person_name : string = "urooba";

// const personName_Array : string[] = ['person' , 'car' , 'cold Drink'];


interface person {
    age: number,
    name: string,
    nationality : string,
    studant : boolean
}
// this is person object.

let person : person = {
    age : 26,
    name: 'urooba',
    nationality : 'pakistan',
    studant : true
}
console.log(person); 

// this is car object.
interface car {
    maker : string,
    color : string,
    automatic : boolean
}

let car = {
    maker : 'toyota',
    color : 'Black',
    automatic : true
}
console.log(car);