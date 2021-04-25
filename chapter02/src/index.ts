
import './index.scss'

class Person {

    name: string;

    age: number;

    static nickname = '哇哈哈';

    readonly avatar = 'xxx';

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

console.log(Person.nickname);

Person.nickname = '1';

console.log(Person.nickname);

let fun1: () => Promise<string> = () => new Promise((resolve, reject) => {
    return reject('111');
});

let fun2: () => Promise<string> = () => {
    return fun1().catch(err => {
        console.log('err');
        throw err;
    }).finally(() => {
        console.log('finally')
    })
};

fun2().then(() => {

}).catch(err => {
    console.log('err2 =>', err);
}).finally(() => {
    console.log('finally2')
});
