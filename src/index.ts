import { runInThisContext } from 'vm'

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

// 関数の例
function add(a: number, b: number) {
  return a + b
}

// 名前付き関数
function greet(name: string) {
  return 'hello' + name
}

// 関数式
let greet2 = function (name: string) {
  return 'hello' + name
}

// アロー関数式
let greet3 = (name: string) => {
  return 'hello' + name
}

// アロー関数式の省略記法
let greet4 = (name: string) => 'hello' + name

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')
log('User signed in', 'da763be')

// レストパラメーター
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(`${sumVariadicSafe(1, 2, 3)}`)

// jsではクラスのメソッド内だけでなく、全ての関数にthisが定義されている
// しかし、関数の呼び出し方によってthisの意味合いが異なるため、多くのチームでは
// クラスメソッド以外の場所でのthis使用を禁止している
// tslintのno-invalid-thisを有効にすることで、thisを禁止できる

// ジェネレーター
function* createFibonacciGenerator(): Generator<number> {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

let gen = createFibonacciGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// 呼び出しシグネチャ
// function greet(name: string)
type Greet = (name: string) => string

// function log(message: string, userId?: string)
type Log = (message: String, userId?: string) => void

// ジェネリック型のデフォルトの型
// type MyEvent<T = HTMLElemnt> = {
//   target: T
// }

// クラスと継承
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor(private file: File, private rank: Rank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    }
  }
}

abstract class Piece {
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank)
  }

  protected position: Position

  moveTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // King
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
    ]
  }
}

// インターフェイス
interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

// 実装(implementsでインターフェイスを実装していることを表現できる)
class Cat implements Animal {
  constructor(name: string) {
    this.name = name
  }

  readonly name: string

  eat(food: string): void {
    console.info('Ate some', food, '.Mmm!')
  }
  sleep(hours: number): void {
    console.info('Slept for', hours, 'hours')
  }
}

// ファクトリパターン
type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat()
      case 'boot':
        return new Boot()
      case 'sneaker':
        return new Sneaker()
    }
  },
}

// ビルダーパターン
class RequestBuilder {
  private data: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  setUrl(url: string): this {
    this.url = url
    return this
  }

  send(): string {
    return '404'
  }
}

new RequestBuilder()
  .setUrl('/users')
  .setMethod('get')
  .setData({ firstName: 'Anna' })
  .send()
