import TranslateDigit from "../components/TranslateDigit";

const test_raw_0 = `
 _ 
| |
|_|`;
const test_raw_1 = `
   
  |
  |`;
const test_raw_2 = `
 _ 
 _|
|_ `;
const test_raw_3 = `
 _ 
 _|
 _|`;
const test_raw_4 = `
   
|_|
  |`;
const test_raw_5 = `
 _ 
|_ 
 _|`;
const test_raw_6 = `
 _ 
|_ 
|_|`;
const test_raw_7 = `
 _ 
  |
  |`;
const test_raw_8 = `
 _ 
|_|
|_|`;
const test_raw_9 = `
 _ 
|_|
 _|`;
const test_raw_A = `
 _ 
|_|
| |`;
const test_raw_B = `
 _ 
|_\\
|_/`;
const test_raw_C = `
 _ 
|  
|_ `;
const test_raw_D = `
 _ 
| \\
|_/`;
const test_raw_E = `
 _ 
|_ 
|_ `;
const test_raw_F = `
 _ 
|_ 
|  `;
test("Translates given raw digit correctly", () => {
  expect(TranslateDigit(test_raw_0)).toBe("0");
  expect(TranslateDigit(test_raw_1)).toBe("1");
  expect(TranslateDigit(test_raw_2)).toBe("2");
  expect(TranslateDigit(test_raw_3)).toBe("3");
  expect(TranslateDigit(test_raw_4)).toBe("4");
  expect(TranslateDigit(test_raw_5)).toBe("5");
  expect(TranslateDigit(test_raw_6)).toBe("6");
  expect(TranslateDigit(test_raw_7)).toBe("7");
  expect(TranslateDigit(test_raw_8)).toBe("8");
  expect(TranslateDigit(test_raw_9)).toBe("9");
  expect(TranslateDigit(test_raw_A)).toBe("A");
  expect(TranslateDigit(test_raw_B)).toBe("B");
  expect(TranslateDigit(test_raw_C)).toBe("C");
  expect(TranslateDigit(test_raw_D)).toBe("D");
  expect(TranslateDigit(test_raw_E)).toBe("E");
  expect(TranslateDigit(test_raw_F)).toBe("F");
});
