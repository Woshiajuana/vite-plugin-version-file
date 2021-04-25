
window.Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};

window.Promise.prototype.null = function () {
    return this.catch(err => {
        err && console.log(err);
    });
};

window.Promise.prototype.toast = function (callback) {
    return this.catch(err => {
        console.log(err);
    });
};
