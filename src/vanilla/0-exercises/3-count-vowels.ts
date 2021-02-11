// function countVowelsInEach(vowels:string[]):number[] {
//   return vowels.map(countVowels);
// }

// function countVowels(str: string):number {
//   var m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
// }

const countVowelsInEach = (vowels:string[]):number[] => vowels.map(countVowels);
const countVowels = (str: string): number => {
  var m = str.match(/[aeiou]/gi)
  return m === null ? 0 : m.length;
}

export { countVowelsInEach, countVowels };
