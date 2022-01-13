/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

interface Controller<Data, Context> {
  execute(data?: Data, ctx?: Context): Promise<void>;
}

export default Controller;
