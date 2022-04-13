let name = "Gaurav";
console.log("My string is " + name);
console.log("Data type is "+(typeof name));

let marks = 34;
console.log("Data type is "+(typeof marks));

let isDriver = true;
console.log("Data type is "+(typeof isDriver));

let nullVar = null;
console.log("Data type is "+(typeof nullVar));


let stMarks = {
    Gaurav:89,
    Shubham: 36,
    Rohan:34
}
console.log(stMarks);
console.log(typeof stMarks);

function findName(){

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);

let year;
console.log(year);

const jonas = {
    firstName:'Gaurav',
    lastName:'Kulkarni',
    birthyear:2002,
    job:'student',
    friends:['viki','percy','Athena'],
    // hasDiverLicense: false,
    hasDiverLicense: Boolean(prompt("Do u have a Driving license? (Enter true or false):- ")) ,

    calcAge: function(){
        const yr= prompt("Enter the current Yr:- ");
        return  yr - this.birthyear;
    },

    getSummry: function(){
        return `${this.firstName} is a ${this.job} and his age is ${this.calcAge()} and he has ${this.hasDiverLicense ? 'a' : 'no'} driving licence.` //Error
    }
};

console.log(jonas.getSummry());


