import { bigNumbers } from "../0-examples/3-big-numbers";

// function squareNumbers(numbers:number[]) : number[] {
//   return numbers.map(squareNumber)
// }

// function squareNumber(n:number):number {
//   return n **2
// }
const squareNumbers = (numbers:number[]):number[] => numbers.map(squareNumber);

const squareNumber = (n:number):number => n**2


export { squareNumbers, squareNumber };
