/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import Entity from '../entity';
class MyEntity extends Entity {}

it('passes the test for getter and setter', () => {
  const date = new Date().toISOString();
  const entity = new MyEntity();
  entity.id = '84e84197-48ac-47cc-8a99-2c6aa4408b67';
  entity.createdAt = date;
  entity.updatedAt = date;

  expect(entity.id).toBe('84e84197-48ac-47cc-8a99-2c6aa4408b67');
  expect(entity.createdAt).toBe(date);
  expect(entity.updatedAt).toBe(date);
});

it('throws error if the provided `id` is empty', () => {
  const entity = new MyEntity();
  expect(() => {
    entity.id = '';
  }).toThrow('Invalid `id`');
});

it('throws error if the provided `createdAt` is not valid', () => {
  const date = 'not_a_date';
  const entity = new MyEntity();

  expect(() => {
    entity.createdAt = date;
  }).toThrow('Invalid `createdAt`');
});

it('throws error if the provided `updatedAt` is not valid', () => {
  const date = 'not_a_date';
  const entity = new MyEntity();

  expect(() => {
    entity.updatedAt = date;
  }).toThrow('Invalid `updatedAt`');
});
