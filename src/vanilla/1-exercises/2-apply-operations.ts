export interface applyOperatioons {
  numbers: number[];
  operator: "add" | "multiply" | "subtract"; 
}


const applyOperations = (arr:applyOperatioons[]): number[] => {
  return arr.map((operations) => {
    if (operations.operator === "add"){
      return operations.numbers[0] + operations.numbers[1];
    } else if (operations.operator === "multiply") {
      return operations.numbers[0] * operations.numbers[1];
    }else {
        return operations.numbers[0]- operations.numbers[1];
    }
  });
}

export {applyOperations};