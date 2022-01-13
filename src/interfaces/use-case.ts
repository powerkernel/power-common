/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface UseCase<Dto, Context> {
  handle(dto?: Dto, ctx?: Context): Promise<void>;
}

export default UseCase;
