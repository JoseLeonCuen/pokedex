import { describe, expect, jest, test } from "@jest/globals";
import { capitalize, cleanString, genderize, snakeToCamelCase } from "./utils";

describe("Utils", () => {
  describe("capitalize", () => {
    test("Capitalizes the first letter of a string", () => {
      let test = "this is the test";
      expect(capitalize(test)).toBe("This is the test");
    });

    test("Doesn't affect an uppercased string", () => {
      let test = "THE TEST";
      expect(capitalize(test)).toBe("THE TEST");
    })
  });
});