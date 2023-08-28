import { describe, expect, test } from "@jest/globals";
import { capitalize, replaceDashWithSpace, genderize, snakeToCamelCase } from "./utils";

describe("Utils", () => {
  describe("capitalize", () => {
    test("Capitalizes the first letter of a string", () => {
      let test = "this is the test";
      expect(capitalize(test)).toBe("This is the test");
    });

    test("Doesn't affect an uppercased string", () => {
      let test = "THE TEST";
      expect(capitalize(test)).toBe("THE TEST");
    });
  });

  describe("replaceDashWithSpace", () => {
    test("Replaces a hyphen with a space", () =>{
      let test = "this-test";
      expect(replaceDashWithSpace(test)).toBe("this test");
    });
    test("Replaces an underscore with a string", () =>{
      let test = "this_test";
      expect(replaceDashWithSpace(test)).toBe("this test");
    });
    test("Replaces both hyphens and underscores with a space and trims the ending spaces", () =>{
      let test = "this-_test__";
      expect(replaceDashWithSpace(test)).toBe("this test");
    });
  });

  describe("genderize", () => {
    test("Replaces -f with ♀", () => {
      expect(genderize("name-f")).toBe("name ♀");
    })
    test("Replaces -m with ♂", () => {
      expect(genderize("name-m")).toBe("name ♂");
    })
  });
  
  describe("snakeToCamelCase", () => {
    test("Replaces snake_case string with camelCase", () => {
      expect(snakeToCamelCase("this_is_now_camel_case")).toBe("thisIsNowCamelCase");
    })
  });
  
});