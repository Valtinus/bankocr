import FormatAccountNumber from "../components/FormatAccountNumber";

const OK_number = "123456789";

const ILL_number = "1234?678?";

const ERR_number = "555555555";

test("Formats account number correctly", () => {
  expect(FormatAccountNumber(OK_number)).toBe("123456789 - OK");
  expect(FormatAccountNumber(ILL_number)).toBe("1234?678? - ILL");
  expect(FormatAccountNumber(ERR_number)).toBe("555555555 - ERR");
  expect(FormatAccountNumber()).toBe(false);
});
