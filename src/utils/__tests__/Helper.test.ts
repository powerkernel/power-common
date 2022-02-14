/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import validator from 'validator';
import Helper from './../helper';

it('should generate a v4 of UUID', () => {
  const uuid = Helper.uuidV4();
  expect(validator.isUUID(uuid, 4)).toBe(true);
});

it('should generate an ObjectID', () => {
  const objectId = Helper.objectId();
  expect(validator.isMongoId(objectId)).toBe(true);
});

it('should generate a random number within the range of min-max', () => {
  const num1 = Helper.randomNumber(1, 10);
  expect(num1).toBeGreaterThanOrEqual(1);
  expect(num1).toBeLessThanOrEqual(10);

  const num2 = Helper.randomNumber(100000, 999999);
  expect(num2).toBeGreaterThanOrEqual(100000);
  expect(num2).toBeLessThanOrEqual(999999);
});

it('should thorw an error if min is greater than max', () => {
  expect(() => {
    Helper.randomNumber(10, 5);
  }).toThrow();
});

it('should slugify the string', () => {
  const result = Helper.slugify('Hello World');
  expect(result).toEqual('hello-world');
});

it('should slipt the array by inputed number', () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const result1 = Helper.sliptArray(array1, 2);
  expect(result1).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 0],
  ]);

  const array2 = ['Mercury', 'Venus', 'Earth', 'Mars'];
  const result2 = Helper.sliptArray(array2, 3);
  expect(result2).toEqual([['Mercury', 'Venus', 'Earth'], ['Mars']]);

  const array3 = [
    {
      name: 'Harry',
      age: 28,
    },
    {
      name: 'Ginny',
      age: 22,
    },
    {
      name: 'Calvin',
      age: 30,
    },
  ];
  const result3 = Helper.sliptArray(array3, 2);
  expect(result3).toEqual([
    [
      {
        name: 'Harry',
        age: 28,
      },
      {
        name: 'Ginny',
        age: 22,
      },
    ],
    [
      {
        name: 'Calvin',
        age: 30,
      },
    ],
  ]);
});
