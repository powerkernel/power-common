/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface SubscriberClient {
  subscribe(
    topic: string,
    callback: (message: string) => Promise<void>
  ): Promise<void>;
}
export default SubscriberClient;
