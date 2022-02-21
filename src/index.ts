console.log('Hello, TypeScript!')

/// tsの型アノテーションはできる限り使用せず、推論させるのが良い
let hello = 'hello' // string
let helloWithType: string = 'hello' // string(型アノテーション)

// オブジェクトの型アノテーションは:objectとしてはいけない
// この場合の型推論は{ b : string }となるため
// またjsのオブジェクトはミュータブルのため、constで宣言しても
// オブジェクトの中身までリテラル型にならない
let a = {
  b: 'x',
}

a.b

let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman',
}

class Person {
  constructor(public firstName: string, public lastName: string) {}
}
c = new Person('matt', 'smith')

// タプル
let tuple: [number] = [1]

// [名前, 名字, 生まれ年]のタプル
let profileTuple: [String, String, number] = ['malocolm', 'gladwell', 1963]

// 可変長のタプル
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']

// 読み取り専用の配列とタプル
let as: readonly number[] = [1, 2, 3]

// null: 値の欠如
// undefined: 値がまだ割り当てられていない変数
// void: return分を持たない関数の戻り値
// never: 決して戻ることのない関数の戻り値

// 列挙型(enum, const enum)は使わない方がいい
// 理由は以下のように、Enum型とnumber型の間で暗黙的な変換ができてしまうため
const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table,
}

function flip(f: Flippable) {
  return 'flipped it'
}

flip(Flippable.Chair)
flip(Flippable.Cup)
flip(12) // numberが渡せてしまう

// これを防ぐには、enumを文字列値だけで定義するようにする必要があり手間
const enum FixFlippable {
  Burger = 'Burger',
  Chair = 'Chair',
  Cup = 'Cup',
}

function fixFlip(f: FixFlippable) {
  return 'flipped it'
}

fixFlip(FixFlippable.Burger)
fixFlip(FixFlippable.Chair)
// fixFlip(12) // エラー
