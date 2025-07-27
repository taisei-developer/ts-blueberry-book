// 指数標記の数値リテラル
const big = 1e8;
const small = 4e-5;

console.log(big, small)
// -> 100000000 0.00004

// BigIntリテラル
const bignum: bigint = (123n + 456n) * 2n

console.log(bignum)
// -> 1158n

const result = 5n / 2n;

console.log(result)
// -> 2n

// 明示的な変換
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
  const num = Number(line);

  // 1000を足して出力
  console.log(num + 1000);
  rl.close();
});

// ランタイムエラー発生
// const bigint = BigInt("foo");
// console.log("bigint is ", bigint);