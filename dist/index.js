"use strict";
console.log('Hello, TypeScript!');
/// tsの型アノテーションはできる限り使用せず、推論させるのが良い
let hello = 'hello'; // string
let helloWithType = 'hello'; // string(型アノテーション)
// オブジェクトの型アノテーションは:objectとしてはいけない
// この場合の型推論は{ b : string }となるため
// またjsのオブジェクトはミュータブルのため、constで宣言しても
// オブジェクトの中身までリテラル型にならない
let a = {
    b: 'x',
};
a.b;
let c = {
    firstName: 'john',
    lastName: 'barrowman',
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person('matt', 'smith');
// タプル
let tuple = [1];
// [名前, 名字, 生まれ年]のタプル
let profileTuple = ['malocolm', 'gladwell', 1963];
// 可変長のタプル
let friends = ['Sara', 'Tali', 'Chloe', 'Claire'];
// 読み取り専用の配列とタプル
let as = [1, 2, 3];
function flip(f) {
    return 'flipped it';
}
flip(1 /* Chair */);
flip(2 /* Cup */);
flip(12); // numberが渡せてしまう
function fixFlip(f) {
    return 'flipped it';
}
fixFlip("Burger" /* Burger */);
fixFlip("Chair" /* Chair */);
// fixFlip(12) // エラー
// 関数の例
function add(a, b) {
    return a + b;
}
// 名前付き関数
function greet(name) {
    return 'hello' + name;
}
// 関数式
let greet2 = function (name) {
    return 'hello' + name;
};
// アロー関数式
let greet3 = (name) => {
    return 'hello' + name;
};
// アロー関数式の省略記法
let greet4 = (name) => 'hello' + name;
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
// レストパラメーター
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(`${sumVariadicSafe(1, 2, 3)}`);
// jsではクラスのメソッド内だけでなく、全ての関数にthisが定義されている
// しかし、関数の呼び出し方によってthisの意味合いが異なるため、多くのチームでは
// クラスメソッド以外の場所でのthis使用を禁止している
// tslintのno-invalid-thisを有効にすることで、thisを禁止できる
// ジェネレーター
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let gen = createFibonacciGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//# sourceMappingURL=index.js.map