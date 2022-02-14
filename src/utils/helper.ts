/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

class Helper {
  public static uuidV4(): string {
    return uuidv4();
  }

  public static objectId(): string {
    const second = (~~(Date.now() / 1000)).toString(16);

    const machineId = crypto
      .createHash('md5')
      .update(process.hrtime.bigint().toString(16))
      .digest('hex')
      .slice(-6);

    const processId = process.pid.toString(16).slice(-4).padStart(4, '0');

    const counter = process.hrtime
      .bigint()
      .toString(16)
      .slice(-6)
      .padStart(6, '0');

    return `${second}${machineId}${processId}${counter}`;
  }

  public static sliptArray<T>(a: T[], size: number) {
    let i, j;
    const output = [];
    for (i = 0, j = a.length; i < j; i += size) {
      output.push(a.slice(i, i + size));
    }
    return output;
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
