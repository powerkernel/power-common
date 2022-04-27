/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import EventMeta from "./event-meta";

type Event = {
  topic: string;
  detail: {
    meta: EventMeta;
    data: unknown;
  };
};

export default Event;
