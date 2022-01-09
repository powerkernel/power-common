/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import ObservableEntity from '../abstracts/observable-entity';

interface Observer {
  // Receive update from subject.
  update(subject: ObservableEntity): void;
}

export default Observer;
