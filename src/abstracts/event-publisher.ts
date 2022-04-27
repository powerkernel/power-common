/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import Event from "../types/event";
import PublisherClient from "../interfaces/publisher-client";

abstract class EventPublisher<T extends Event> {
  abstract readonly topic: T["topic"];
  protected client: PublisherClient;

  constructor(client: PublisherClient) {
    this.client = client;
  }

  async publish(data: T["detail"]): Promise<void> {
    await this.client.publish(this.topic, JSON.stringify(data));
  }
}

export default EventPublisher;
