import { describe, expect, test } from "@jest/globals";
import {
  regionThreshold,
  getGen,
  getPokemonNumber,
  isFromGen,
  isNotNumbered
} from "./genUtils";

describe("Gen Utils", () => {
  describe("getGen", () => {
    test("Returns the generation number to which a pokemon belongs to", () => {      
      expect(getGen(regionThreshold[0].min)).toBe(1);
      expect(getGen(regionThreshold[3].max)).toBe(4);
      expect(getGen(regionThreshold[4].min)).toBe(5);
      expect(getGen(regionThreshold[5].max)).toBe(6);

      //Arbitrary numbers
      expect(getGen(252)).toBe(3);
      expect(getGen(502)).toBe(5);
      expect(getGen(999)).toBe(9);
    });
  });
  
  describe("getPokemonNumber", () => {
    test("Returns the pokemon number from the pokemon URL", () => {      
        let testURL = "https://test/25";
      expect(getPokemonNumber(testURL)).toBe(25);
    });
  });

  describe("isFromGen", () => {
    test("Returns true when the pokemon belongs to a certain generation based on its URL", () => {
        let testURL = "https://test/9";
        expect(isFromGen("kanto", testURL)).toBe(true);
    });
    test("Returns false when the pokemon does not belong to a certain generation based on its URL", () => {
        let testURL = "https://test//815";
        expect(isFromGen("hoenn", testURL)).toBe(false);
    });
  });
  
  describe("isNotNumbered", () => {
    test("Returns true when the received number exceeds the range of the generation thresholds", () => {       
        expect(isNotNumbered(1200)).toBe(true);
    });
    test("Returns false when the received number is withing the generation ranges", () => {
        expect(isNotNumbered(666)).toBe(false);
    });
  });
});