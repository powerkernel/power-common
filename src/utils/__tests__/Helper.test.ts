/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import validator from 'validator';
import Helper from './../helper';

it('returns UUID v4', () => {
  const uuid = Helper.uuidV4();
  expect(validator.isUUID(uuid, 4)).toBe(true);
});

it('returns a random number within the range of min-max', () => {
  const num1 = Helper.randomNumber(1, 10);
  expect(num1).toBeGreaterThanOrEqual(1);
  expect(num1).toBeLessThanOrEqual(10);

  const num2 = Helper.randomNumber(100000, 999999);
  expect(num2).toBeGreaterThanOrEqual(100000);
  expect(num2).toBeLessThanOrEqual(999999);
});

it('thorws an error if min is greater than max', () => {
  expect(() => {
    Helper.randomNumber(10, 5);
  }).toThrow();
});
