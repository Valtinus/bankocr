import GetDigitByPosition from "../components/GetDigitByPosition";

const test_text = `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`;

const test_hexa_text = ` _  _  _  _  _  _  _  _  _ 
|_||_\\|  | \\|_ |_ |_||  |_ 
| ||_/|_ |_/|_ |  | ||_ |_ `;

const test_wrong_text = `    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ `;

test("Gets digit by position correctly", () => {
  expect(GetDigitByPosition(test_text, 0)).toBe("1");
  expect(GetDigitByPosition(test_text, 1)).toBe("2");
  expect(GetDigitByPosition(test_text, 2)).toBe("3");
  expect(GetDigitByPosition(test_text, 3)).toBe("4");
  expect(GetDigitByPosition(test_text, 4)).toBe("5");
  expect(GetDigitByPosition(test_text, 5)).toBe("6");
  expect(GetDigitByPosition(test_text, 6)).toBe("7");
  expect(GetDigitByPosition(test_text, 7)).toBe("8");
  expect(GetDigitByPosition(test_text, 8)).toBe("9");
});

test("Gets hexa digit by position correctly", () => {
  expect(GetDigitByPosition(test_hexa_text, 0)).toBe("A");
  expect(GetDigitByPosition(test_hexa_text, 1)).toBe("B");
  expect(GetDigitByPosition(test_hexa_text, 2)).toBe("C");
  expect(GetDigitByPosition(test_hexa_text, 3)).toBe("D");
  expect(GetDigitByPosition(test_hexa_text, 4)).toBe("E");
  expect(GetDigitByPosition(test_hexa_text, 5)).toBe("F");
  expect(GetDigitByPosition(test_hexa_text, 6)).toBe("A");
  expect(GetDigitByPosition(test_hexa_text, 7)).toBe("C");
  expect(GetDigitByPosition(test_hexa_text, 8)).toBe("E");
});

test("Detects wrong digit by position", () => {
  expect(GetDigitByPosition(test_wrong_text, 0)).toBe("1");
  expect(GetDigitByPosition(test_wrong_text, 4)).toBe("?");
  expect(GetDigitByPosition(test_wrong_text, 8)).toBe("?");
});
