let a: unknown = 1; // ✓ 正确
let b: unknown = a;
let c: any = a;
let e: string = a as string;
function fn2 (): never {
    throw new Error('报错了');
}

function fn3 (): never {
    while(true){}
}

let x: () => void = function () {

};

// let s: string = x;
// let s: string = c;
