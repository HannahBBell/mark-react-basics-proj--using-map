import { stringifyBoolean } from "./2-stringify-booleans";

function whisperStrings(strings:string[]):string[] {
  return strings.map(whisperString)
};

function whisperString(s:string):string {
  return "shh: " + s.toLowerCase()
};

export { whisperStrings, whisperString };
