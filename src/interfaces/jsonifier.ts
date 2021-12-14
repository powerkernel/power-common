/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

interface Jsonifier<T> {
  jsonify(): T;
}

export default Jsonifier;
