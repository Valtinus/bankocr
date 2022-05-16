import IsInvalid from "../components/IsInvalid";

const valid_number = "123456789";

const invalid_number = "1234?678?";

test("Checks if given number is invalid", () => {
  expect(IsInvalid(valid_number)).toBe(false);
  expect(IsInvalid(invalid_number)).toBe(true);
});
