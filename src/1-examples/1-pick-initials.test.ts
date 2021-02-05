import { doubleNumber, doubleNumbers } from "./0-double-numbers";

describe("pickInitials - takes an array of objects and returns an array of strings representing initials", () => {
  test("array of objects that all have firstName and lastName", () => {
    const input = [
      { firstName: "Richard", lastName: "Ng" },
      { firstName: "Neill", lastName: "Bogie" },
    ];
    expect(pickInitials(input)).toStrictEqual(["R.N.", "N.B."]);
  });

  test("only takes the first initial from last name (ignores double-barrel cases)", () => {
    const input = [{ firstName: "Esme", lastName: "Hotston Moore" }];
    expect(pickInitials(input)).toStrictEqual(["E.H."]);
  });
});