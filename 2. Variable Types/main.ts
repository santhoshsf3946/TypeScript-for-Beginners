export {}

let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

const title = 'Sample text';

let isBeginner: boolean = true;
let total: number = 50;
let name: string = 'Santhosh';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Santhosh', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Blue;

console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Santhosh';

let myVariable: any = 10;

console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();


let myVariable1: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj
}

if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
(myVariable1 as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
// b = true;  // Type error

let multiType: number | boolean;
multiType = 20;
multiType = true;
// multiType = "Hello";  // Type not assignable error

