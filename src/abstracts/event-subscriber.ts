/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import SubscriberClient from "../interfaces/subscriber-client";
import Event from "./../types/event";

abstract class EventSubscriber<T extends Event> {
  abstract readonly topic: T["topic"];
  abstract onMessage(data: T["detail"]): Promise<void>;
  protected client: SubscriberClient;

  constructor(client: SubscriberClient) {
    this.client = client;
  }

  async subscribe(): Promise<void> {
    this.client.subscribe(this.topic, async (msg) => {
      await this.onMessage(JSON.parse(msg));
    });
  }
}

export default EventSubscriber;
