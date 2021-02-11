function stringifyBooleans(booleans:(boolean|string)[]):string[] {
  return booleans.map(stringifyBoolean)
};

function stringifyBoolean(b:boolean|string): string {
  return `${b}`
}

export { stringifyBooleans, stringifyBoolean };
