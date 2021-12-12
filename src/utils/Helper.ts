/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { v4 as uuidv4 } from "uuid";

export default class Helper {
  public static uuidv4(): string {
    return uuidv4();
  }
}
