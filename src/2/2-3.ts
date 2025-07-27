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