/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import validator from "validator";

export default class Validator {
  public static isPhoneNumber(number: string): boolean {
    return validator.isMobilePhone(number, "any", { strictMode: true });
  }

  public static isEmail(email: string): boolean {
    return validator.isEmail(email);
  }

  public static isUUID(uuid: string): boolean {
    return validator.isUUID(uuid);
  }

  public static isIP(ip: string): boolean {
    return validator.isIP(ip);
  }
}
