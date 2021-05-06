
enum Gender {
    Male,
    Female,
}
let a : { name: string, gender: Gender };
a = { name: '张三', gender: Gender.Male };

let u: undefined = undefined;
let n: null = null;

let x: string = n;
// function getLength(something: string | number): number {
//     return something.length;
// }

let x1: IArguments

interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let tom = {
    name: 'Tom',
    run: () => { console.log('run') }
};

let a1: Animal = {
    name: 'xx'
}
let animal: Animal = {
    name: '1',
};
let c: Cat = a1 as Cat;

delete tom.name;

animal = tom;



interface IHaha {
    name: string,
    age: number,
}

interface IHeiHei {
    name: string,
    age: number,
    x: string,
}

let ha: IHeiHei = {
    name: '1',
    age: 1,
    x: '1',
};

let hei: IHaha = ha;
