/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import validator from "validator";
import Helper from "./../helper";

it("should generate a v4 of UUID", () => {
  const uuid = Helper.uuidV4();
  expect(validator.isUUID(uuid, 4)).toBe(true);
});

it("should generate an ObjectID", () => {
  const objectId = Helper.objectId();
  expect(validator.isMongoId(objectId)).toBe(true);
});

it("should generate a random number within the range of min-max", () => {
  const num1 = Helper.randomNumber(1, 10);
  expect(num1).toBeGreaterThanOrEqual(1);
  expect(num1).toBeLessThanOrEqual(10);

  const num2 = Helper.randomNumber(100000, 999999);
  expect(num2).toBeGreaterThanOrEqual(100000);
  expect(num2).toBeLessThanOrEqual(999999);
});

it("should thorw an error if min is greater than max", () => {
  expect(() => {
    Helper.randomNumber(10, 5);
  }).toThrow();
});

it("should slugify the string", () => {
  expect(Helper.slugify("Hello World")).toEqual("hello-world");
  expect(Helper.slugify("Polygon bridge & staking")).toEqual(
    "polygon-bridge-and-staking"
  );
});

it("should slipt the array by inputed number", () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const result1 = Helper.sliptArray(array1, 2);
  expect(result1).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 0],
  ]);

  const array2 = ["Mercury", "Venus", "Earth", "Mars"];
  const result2 = Helper.sliptArray(array2, 3);
  expect(result2).toEqual([["Mercury", "Venus", "Earth"], ["Mars"]]);

  const array3 = [
    {
      name: "Harry",
      age: 28,
    },
    {
      name: "Ginny",
      age: 22,
    },
    {
      name: "Calvin",
      age: 30,
    },
  ];
  const result3 = Helper.sliptArray(array3, 2);
  expect(result3).toEqual([
    [
      {
        name: "Harry",
        age: 28,
      },
      {
        name: "Ginny",
        age: 22,
      },
    ],
    [
      {
        name: "Calvin",
        age: 30,
      },
    ],
  ]);
});

it("should calculate the percentage change of 2 numbers", () => {
  const result1 = Helper.percentageChange(10, 5);
  expect(result1).toEqual(1.0);
  const result2 = Helper.percentageChange(5, 10);
  expect(result2).toEqual(-0.5);
  const result3 = Helper.percentageChange(5, 5);
  expect(result3).toEqual(0.0);
  const result4 = Helper.percentageChange(123, 456);
  expect(result4).toEqual(-0.73);
  const result5 = Helper.percentageChange(333, 222);
  expect(result5).toEqual(0.5);
  const result6 = Helper.percentageChange(10, 0);
  expect(result6).toEqual(Infinity);
});

it("should transform a string between camelCase, PascalCase, snake_case and kebab-case", () => {
  const text = "Hello Power Kernel";
  expect(Helper.toKebabCase(text)).toEqual("hello-power-kernel");
  expect(Helper.toCamelCase(text)).toEqual("helloPowerKernel");
  expect(Helper.toPascalCase(text)).toEqual("HelloPowerKernel");
  expect(Helper.toSnakeCase(text)).toEqual("hello_power_kernel");
});

it("should generate a md5 string", () => {
  const md5 = Helper.md5("md5");
  expect(md5).toEqual("1bc29b36f623ba82aaf6724fd3b16718");
});
