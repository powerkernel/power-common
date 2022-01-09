/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import Topics from './topics';

type Event = {
  topic: Topics;
  data: unknown;
};

export default Event;
