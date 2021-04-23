
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
