/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { PublisherClient } from '..';
import Event from './../types/event';

interface EventPublisher {
  topic: Event['topic'];
  client: PublisherClient;

  publish(data: Event['data']): void;
}

export default EventPublisher;
