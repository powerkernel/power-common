/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import EventMeta from './event-meta';
import Topics from './topics';

type Event = {
  topic: Topics;
  data: {
    meta: EventMeta;
    data: unknown;
  };
};

export default Event;
