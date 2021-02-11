// function stringifyBooleans(booleans:(boolean|string)[]):string[] {
//   return booleans.map(stringifyBoolean)
// };

// function stringifyBoolean(b:boolean|string): string {
//   return `${b}`
// }

const stringifyBooleans = (booleans:(boolean|string)[]):string[] => booleans.map(stringifyBoolean);

const stringifyBoolean = (b:boolean|string): string => `${b}`;


export { stringifyBooleans, stringifyBoolean };
