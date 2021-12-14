/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import Validator from './../utils/validator';

abstract class Entity {
  protected wrappedId!: string;
  protected wrappedCreatedAt!: string;
  protected wrappedUpdatedAt!: string;

  public get id(): string {
    return this.wrappedId;
  }
  public set id(id: string) {
    if (!Validator.isUuid(id)) {
      throw new Error('Invalid `id`');
    }
    this.wrappedId = id;
  }

  public get createdAt(): string {
    return this.wrappedCreatedAt;
  }
  public set createdAt(date: string) {
    if (!Validator.isIsoDate(date)) {
      throw new Error('Invalid `createdAt`');
    }
    this.wrappedCreatedAt = date;
  }

  public get updatedAt(): string {
    return this.wrappedUpdatedAt;
  }
  public set updatedAt(date: string) {
    if (!Validator.isIsoDate(date)) {
      throw new Error('Invalid `updatedAt`');
    }
    this.wrappedUpdatedAt = date;
  }
}

export default Entity;
