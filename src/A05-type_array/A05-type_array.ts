export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatStr(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const multResult = multiplyArgs(1, 2, 3);
const concatResult = concatStr('a', 'b', 'c');
const upperResult = toUpperCase('a', 'b', 'c');

console.log(multResult);   // 6
console.log(concatResult); // ['a', 'b', 'c']
console.log(upperResult);  // 'A', 'B', 'C'
