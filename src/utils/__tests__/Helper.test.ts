/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import Helper from "../Helper";
import validator from "validator";

it("returns uuid v4", () => {
  const uuid = Helper.uuidv4();
  expect(validator.isUUID(uuid, 4)).toBe(true);
});
