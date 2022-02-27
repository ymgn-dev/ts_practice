"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
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
var greet2 = function (name) {
    return 'hello' + name;
};
// アロー関数式
var greet3 = function (name) {
    return 'hello' + name;
};
// アロー関数式の省略記法
var greet4 = function (name) { return 'hello' + name; };
function log(message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
// レストパラメーター
function sumVariadicSafe() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log("".concat(sumVariadicSafe(1, 2, 3)));
// jsではクラスのメソッド内だけでなく、全ての関数にthisが定義されている
// しかし、関数の呼び出し方によってthisの意味合いが異なるため、多くのチームでは
// クラスメソッド以外の場所でのthis使用を禁止している
// tslintのno-invalid-thisを有効にすることで、thisを禁止できる
// ジェネレーター
function createFibonacciGenerator() {
    var a, b;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                a = 0;
                b = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, a];
            case 2:
                _b.sent();
                _a = [b, a + b], a = _a[0], b = _a[1];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var gen = createFibonacciGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
var Position = /** @class */ (function () {
    function Position(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    Position.prototype.distanceFrom = function (position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    };
    return Position;
}());
var Piece = /** @class */ (function () {
    function Piece(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return King;
}(Piece));
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    Game.makePieces = function () {
        return [
            // King
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
        ];
    };
    return Game;
}());
// 実装(implementsでインターフェイスを実装していることを表現できる)
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.info('Ate some', food, '.Mmm!');
    };
    Cat.prototype.sleep = function (hours) {
        console.info('Slept for', hours, 'hours');
    };
    return Cat;
}());
var BalletFlat = /** @class */ (function () {
    function BalletFlat() {
        this.purpose = 'dancing';
    }
    return BalletFlat;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = 'woodcutting';
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = 'walking';
    }
    return Sneaker;
}());
var Shoe = {
    create: function (type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
        }
    }
};
// ビルダーパターン
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    RequestBuilder.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    RequestBuilder.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.send = function () {
        return '404';
    };
    return RequestBuilder;
}());
new RequestBuilder()
    .setUrl('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
setTimeout(function () {
    console.info('A');
}, 1);
setTimeout(function () {
    console.info('B');
}, 2);
console.info('C');
