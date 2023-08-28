import { describe, expect, jest, test, afterEach } from "@jest/globals";
import {
    findTypeIndex,
    getHeight,
    getWeight,
    insertWeaknessRelation,
    namePokemon,
    seekAndDoubleType,
    seekAndRemoveType,
    typeIsListed
} from "./pokeUtils";

import { WeaknessRelations, TypeData } from "./types";

describe("Poke Utils", () => {

    const mockWeaknessRelation: WeaknessRelations = {
        noDamageFrom: [],
        halfDamageFrom: [
            {
                name: "fighting",
                url: "fighting/url"
            },
            {
                name: "ground",
                url: "ground/url"
            },
            {
                name: "grass",
                url: "grass/url"
            }
        ],
        doubleDamageFrom: [
            {
                name: "flying",
                url: "flying/url"
            },
            {
                name: "rock",
                url: "rock/url"
            }
        ]
    };

    
    describe("findTypeIndex", () => {
        test("Returns the index of a certain type within an array of arrays", () => {
            expect(findTypeIndex(mockWeaknessRelation.doubleDamageFrom, "rock")).toBe(1);
        });
    });

    describe("getHeight", () => {
        test("Returns the pokemon's height in meters", () => {
            expect(getHeight(25)).toBe("2.5 m");
            expect(getHeight(302)).toBe("30.2 m");
        })
    });

    describe("getWeight", () => {
        test("Returns the pokemon's weight in kilograms", () => {
            expect(getWeight(400)).toBe("40 kg");
            expect(getWeight(199)).toBe("19.9 kg");
        })
    });

    describe("insertWeaknessRelation", () => {
        test("Adds type to weakness relation 'double damage from'", () => {
            const fireType: TypeData = {
                name: "fire",
                url: "fire/url"
            };

            expect(insertWeaknessRelation(mockWeaknessRelation, "double_damage_from", fireType).doubleDamageFrom).toHaveLength(3);
        });
        test("Adds type to weakness relation 'no damage from' and removes it from other relations", () => {
            const groundType: TypeData = {
                name: "ground",
                url: "ground/url"
            };

            expect(insertWeaknessRelation(mockWeaknessRelation, "no_damage_from", groundType).halfDamageFrom).toHaveLength(2);
            expect(mockWeaknessRelation.noDamageFrom).toHaveLength(1);
        });
        test("Duplicates resistance to a type by marking it as 'double'", () => {
            const grassType: TypeData = {
                name: "grass",
                url: "grass/url"
            };

            expect(insertWeaknessRelation(mockWeaknessRelation, "half_damage_from", grassType).halfDamageFrom[1].double).toBeTruthy();
        });
        test("Duplicates damage from a type by marking it as 'double'", () => {
            const rockType: TypeData = {
                name: "rock",
                url: "rock/url"
            };

            expect(insertWeaknessRelation(mockWeaknessRelation, "double_damage_from", rockType).doubleDamageFrom[1].double).toBeTruthy();
        });
    });

    describe("namePokemon", () => {
        test("Replaces special characters and capitalizes name", () => {
            expect(namePokemon("mr-mime")).toBe("Mr mime");
        });
        test("Genderizes and capitalizes name", () => {
            expect(namePokemon("nidoran-m")).toBe("Nidoran ♂");
        });
    });

    describe("seekAndDoubleType", () => {        
        test("Adds the 'double' flag to a type within a type relation", () => {
            const fightingType: TypeData = {
                name: "fighting",
                url: "fighting/url"
            };
            expect(seekAndDoubleType(mockWeaknessRelation.halfDamageFrom, fightingType)[0].double).toBeTruthy();
        });
    });
    
    describe("seekAndRemoveType", () => {        
        test("Removes a type from a type relation", () => {
            expect(seekAndRemoveType(mockWeaknessRelation.doubleDamageFrom, "fire")).toHaveLength(2);
        });
    });

    describe("typeIsListed", () => {
        test("Returns the name of the relation that a type is found on", () => {
            const grassType: TypeData = {
                name: "grass",
                url: "grass/url"
            };

            expect(typeIsListed(mockWeaknessRelation, grassType)).toBe("halfDamageFrom");
        });        
        test("Returns undefined if a type is not found on a weakness list", () => {
            const waterType: TypeData = {
                name: "water",
                url: "water/url"
            };

            expect(typeIsListed(mockWeaknessRelation, waterType)).toBe(undefined);
        });
    });
});