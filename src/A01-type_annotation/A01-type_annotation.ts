/* eslint-disable */
//Type Annotation -> define qual o tipo da variável está sendo utilizada
// Tipos Primitivos/Básicos (ocorre inferência de tipo)
let nome: string = 'You'; // qualquer tipo de string: '', "", ``
let idade: number = 10; //10, 1.50, -5.50, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //true or false
let simbol: symbol = Symbol('qualquer-symboml') // Symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3, 4, 5];
let arrayNumbers2: number[] = [1, 2, 3, 4, 5];
let arrayStrings: Array<string> = ["d", `c`, 'b', "a"];
let arrayStrings2: string[] = ["d", `c`, 'b', "a"];


// Objects
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'You'
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}
// const result = sum(2,2); // inferiu que essa variável retorna numbers
const sum2: (x:number, y:number) => number = (x, y) => x+y;
