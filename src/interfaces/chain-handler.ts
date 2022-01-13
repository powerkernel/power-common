/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface ChainHandler<T> {
  setNext(handler: ChainHandler<T>): ChainHandler<T>;
  handle(message: T): Promise<boolean>;
}

export default ChainHandler;
