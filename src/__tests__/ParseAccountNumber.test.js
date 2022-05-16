import ParseAccountNumber from "../components/ParseAccountNumber";

const test_text = `    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|`;

const test_hexa_text = ` _  _  _  _  _  _  _  _  _ 
|_||_\\|  | \\|_ |_ |_||  |_ 
| ||_/|_ |_/|_ |  | ||_ |_ `;

const test_wrong_text = `    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ `;

test("Parses account number correctly", () => {
  expect(ParseAccountNumber(test_text)).toBe("123456789");
  expect(ParseAccountNumber(test_hexa_text)).toBe("ABCDEFACE");
  expect(ParseAccountNumber(test_wrong_text)).toBe("1234?678?");
});
