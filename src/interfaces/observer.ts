/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import ObservableEntity from "../abstracts/observable-entity";

interface Observer<T extends ObservableEntity> {
  update(subject: T): void;
}

export default Observer;
