/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import Event from "./../types/event";
import SubscriberClient from "./subscriber-client";

interface EventSubscriber<T extends Event<T["topic"]>> {
  client: SubscriberClient;
  subscribe(topic: T["topic"]): Promise<void>;
}

export default EventSubscriber;
