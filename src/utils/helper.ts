/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

class Helper {
  public static uuidV4(): string {
    return uuidv4();
  }

  public static slugify(string: string): string {
    return slugify(string, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  }

  public static randomNumber(min: number, max: number): number {
    if (min > max) {
      throw new Error('min cannot be greater than max');
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default Helper;
