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
