/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import PublisherClient from '../interfaces/publisher-client';
import Event from './../types/event';

abstract class EventPublisher<T extends Event> {
  abstract topic: T['topic'];
  protected client: PublisherClient;

  constructor(client: PublisherClient) {
    this.client = client;
  }

  publish(data: T['data']): void {
    this.client.publish(this.topic, JSON.stringify(data));
  }
}

export default EventPublisher;
