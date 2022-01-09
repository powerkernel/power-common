/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import ObservableSubject from './observable-subject';

interface Observer {
  // Receive update from subject.
  update(subject: ObservableSubject): void;
}

export default Observer;
