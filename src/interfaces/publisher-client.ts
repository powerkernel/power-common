/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface PublisherClient {
  publish(topic: string, data: string): Promise<void>;
}
export default PublisherClient;
