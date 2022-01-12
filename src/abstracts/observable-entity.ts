/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import Observer from '../interfaces/observer';
import Entity from './entity';

abstract class ObservableEntity extends Entity {
  protected observers: Observer<ObservableEntity>[] = [];

  attach(observer: Observer<ObservableEntity>): void {
    const isExist = this.observers.includes(observer);
    if (!isExist) {
      this.observers.push(observer);
    }
  }

  detach(observer: Observer<ObservableEntity>): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

export default ObservableEntity;
