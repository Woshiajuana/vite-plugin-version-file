"use strict";
exports.__esModule = true;
require("./index.scss");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.avatar = 'xxx';
        this.name = name;
        this.age = age;
    }
    Person.nickname = '哇哈哈';
    return Person;
}());
console.log(Person.nickname);
Person.nickname = '1';
console.log(Person.nickname);
var fun1 = function () { return new Promise(function (resolve, reject) {
    return reject('111');
}); };
var fun2 = function () {
    return fun1()["catch"](function (err) {
        console.log('err');
        throw err;
    })["finally"](function () {
        console.log('finally');
    });
};
fun2().then(function () {
})["catch"](function (err) {
    console.log('err2 =>', err);
})["finally"](function () {
    console.log('finally2');
});
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days.Fri);
console.log(Days[0]);
