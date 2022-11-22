/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import slug from "slug";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import * as changeCase from "change-case";

class Helper {
  public static uuidV4(): string {
    return uuidv4();
  }

  public static objectId(): string {
    const second = (~~(Date.now() / 1000)).toString(16);

    const machineId = crypto
      .createHash("md5")
      .update(process.hrtime.bigint().toString(16))
      .digest("hex")
      .slice(-6);

    const processId = process.pid.toString(16).slice(-4).padStart(4, "0");

    const counter = process.hrtime
      .bigint()
      .toString(16)
      .slice(-6)
      .padStart(6, "0");

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
    return slug(string);
  }

  public static randomNumber(min: number, max: number): number {
    if (min > max) {
      throw new Error("min cannot be greater than max");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static percentageChange(current: number, previous: number): number {
    return +((current - previous) / Math.abs(previous)).toFixed(2);
  }

  public static toKebabCase(string: string): string {
    return changeCase.paramCase(string);
  }

  public static toPascalCase(string: string): string {
    return changeCase.pascalCase(string);
  }

  public static toSnakeCase(string: string): string {
    return changeCase.snakeCase(string);
  }

  public static toCamelCase(string: string): string {
    return changeCase.camelCase(string);
  }

  public static md5(string: string): string {
    return crypto.createHash("md5").update(string).digest("hex");
  }

  public static topicsToStreams(topics: string[]): string[] {
    const streams = topics.map((topic) => {
      const [object] = topic.split(".");
      return object.trim();
    });

    // remove duplicate and empty
    return streams.filter((x, i) => {
      return i === streams.indexOf(x) && x !== "";
    });
  }
}

export default Helper;
