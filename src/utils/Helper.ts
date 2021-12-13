/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { v4 as uuidv4 } from "uuid";

class Helper {
  public static uuidV4(): string {
    return uuidv4();
  }

  public static randomNumber(min: number, max: number): number {
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default Helper;
