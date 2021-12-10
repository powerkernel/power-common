/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import Validator from "../Validator";

it("returns true if the provided input is an email", () => {
  const result = Validator.isEmail("email@domain.com");
  expect(result).toBe(true);
});

it("returns false if the provided input is NOT an email", () => {
  const result = Validator.isEmail("this is not an email");
  expect(result).toBe(false);
});

it("returns true if the provided input is a phone number", () => {
  const result = Validator.isPhoneNumber("+13305513148");
  expect(result).toBe(true);
});

it("returns false if the provided input is NOT a phone number", () => {
  // no +
  const result1 = Validator.isPhoneNumber("13305513148");
  expect(result1).toBe(false);
  const result2 = Validator.isPhoneNumber("0013305513148");
  expect(result2).toBe(false);

  // too long
  const result3 = Validator.isPhoneNumber("+849090984909098490909");
  expect(result3).toBe(false);
});
