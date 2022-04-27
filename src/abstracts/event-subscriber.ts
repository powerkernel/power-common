/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import SubscriberClient from "../interfaces/subscriber-client";
import Event from "./../types/event";

abstract class EventSubscriber<T extends Event> {
  abstract topic: T["topic"];
  abstract onMessage(data: T["detail"]): void;
  protected client: SubscriberClient;

  constructor(client: SubscriberClient) {
    this.client = client;
  }

  async subscribe(): Promise<void> {
    this.client.subscribe(this.topic);
  }
}

export default EventSubscriber;
