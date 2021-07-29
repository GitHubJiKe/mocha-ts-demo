import { assert } from "chai";
import { add } from "../src";

describe("functions", function () {
  describe("add", function () {
    it("1 + 3 = 4", function () {
      assert.equal(add(1, 3), 2);
    });
  });
});
