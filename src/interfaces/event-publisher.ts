/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import Event from './../types/event';
import PublisherClient from './publisher-client';

interface EventPublisher<T extends Event> {
  topic: T['topic'];
  client: PublisherClient;
  publish(data: T['data']): Promise<void>;
}

export default EventPublisher;
