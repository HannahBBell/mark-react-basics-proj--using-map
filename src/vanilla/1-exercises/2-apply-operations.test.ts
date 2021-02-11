import { applyOperations,applyOperatioons } from "./2-apply-operations";

describe("applyOperations - takes two numbers and applies a specified operation to them", () => {
  test("operation: add", () => {
    const input:applyOperatioons[] = [
      { numbers: [8, 4], operator: "add" },
      { numbers: [12, 1], operator: "add" },
    ];
    expect(applyOperations(input)).toStrictEqual([12, 13]);
  });

  test("operation: multiply", () => {
    const input:applyOperatioons[] = [
      { numbers: [8, 4], operator: "multiply" },
      { numbers: [12, 1], operator: "multiply" },
    ];
    expect(applyOperations(input)).toStrictEqual([32, 12]);
  });

  test("operation: subtract", () => {
    const input:applyOperatioons[] = [
      { numbers: [8, 4], operator: "subtract" },
      { numbers: [12, 1], operator: "subtract" },
    ];
    expect(applyOperations(input)).toStrictEqual([4, 11]);
  });
});
