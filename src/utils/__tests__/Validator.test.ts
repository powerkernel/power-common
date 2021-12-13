/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import Validator from "./../validator";

describe("isEmail", () => {
  /* isEmail */
  it("returns true if the provided input is an email", () => {
    const result = Validator.isEmail("email@domain.com");
    expect(result).toBe(true);
  });

  it("returns false if the provided input is NOT an email", () => {
    const result = Validator.isEmail("this is not an email");
    expect(result).toBe(false);
  });
});

describe("isPhone", () => {
  it("returns true if the provided input is a phone number", () => {
    const result = Validator.isPhoneNumber("+13305513148");
    expect(result).toBe(true);
  });

  it("returns false if the provided input is NOT a phone number", () => {
    const result1 = Validator.isPhoneNumber("13305513148");
    const result2 = Validator.isPhoneNumber("0013305513148");
    const result3 = Validator.isPhoneNumber("+849090984909098490909");

    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });
});

describe("isUuid", () => {
  it("returns true if the provided input is a valid UUID", () => {
    const uuidV1 = "e2beb850-5b52-11ec-bf63-0242ac130002";
    const uuidV3 = "3679a4a7-b76e-3e21-a8e7-ddf2fe339d81";
    const uuidV4 = "5f4d9972-8bee-4745-93a1-207112145775";
    const uuidV5 = "ed0c66b9-ef48-5ffc-9bc2-4a03ed1048ea";
    expect(Validator.isUuid(uuidV1)).toBe(true);
    expect(Validator.isUuid(uuidV3)).toBe(true);
    expect(Validator.isUuid(uuidV4)).toBe(true);
    expect(Validator.isUuid(uuidV5)).toBe(true);
  });

  it("returns false if the provided input is NOT a valid UUID", () => {
    const uuid = "123-456-789-123-456789";
    expect(Validator.isUuid(uuid)).toBe(false);
  });
});

describe("isIp", () => {
  it("returns true if the provided input is a valid IP address", () => {
    const ipV4 = "84.253.240.150";
    const ipV6 = "2001:db8:3333:4444:5555:6666:7777:8888";
    expect(Validator.isIp(ipV4)).toBe(true);
    expect(Validator.isIp(ipV6)).toBe(true);
  });

  it("returns false if the provided input is a valid IP address", () => {
    const ipV4 = "84.253.240.com";
    const ipV6 = "2001:db8:3333:4444:5555:6666:7777:COM";
    expect(Validator.isIp(ipV4)).toBe(false);
    expect(Validator.isIp(ipV6)).toBe(false);
  });
});

describe("isIsoDate", () => {
  it("returns true if the provided input is a valid ISO date", () => {
    const date = new Date("29 October 1984 12:12:12 GMT+0700").toISOString();
    expect(Validator.isIsoDate(date)).toBe(true);
  });

  it("returns false if the provided input is NOT a valid ISO date", () => {
    const date = new Date("29 October 1984 12:12:12 GMT+0700").toString();
    expect(Validator.isIsoDate(date)).toBe(false);
  });
});
