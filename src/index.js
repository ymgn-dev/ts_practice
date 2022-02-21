console.log('Hello, TypeScript!');
/// tsの型アノテーションはできる限り使用せず、推論させるのが良い
var hello = 'hello'; // string
var helloWithType = 'hello'; // string(型アノテーション)
// オブジェクトの型アノテーションは:objectとしてはいけない
// この場合の型推論は{ b : string }となるため
// またjsのオブジェクトはミュータブルのため、constで宣言しても
// オブジェクトの中身までリテラル型にならない
var a = {
    b: 'x'
};
a.b;
var c = {
    firstName: 'john',
    lastName: 'barrowman'
};
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
c = new Person('matt', 'smith');
// タプル
var tuple = [1];
// [名前, 名字, 生まれ年]のタプル
var profileTuple = ['malocolm', 'gladwell', 1963];
// 可変長のタプル
var friends = ['Sara', 'Tali', 'Chloe', 'Claire'];
// 読み取り専用の配列とタプル
var as = [1, 2, 3];
function flip(f) {
    return 'flipped it';
}
flip(1 /* Chair */);
flip(2 /* Cup */);
flip(12);
