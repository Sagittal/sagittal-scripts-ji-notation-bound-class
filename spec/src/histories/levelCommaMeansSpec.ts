import {
    Cents,
    CommaMean,
    computePitchExpectation,
    Decimal,
    HALF_SCALER,
    Vector,
    Name,
    PitchExpectation,
    ScaledVector,
    Irrational,
} from "@sagittal/general"
import { JiNotationLevelId } from "@sagittal/system"
import { computeJiNotationLevelCommaMeans } from "../../../src/histories/levelCommaMeans"

describe("computeJiNotationLevelCommaMeans", (): void => {
    describe("naming", (): void => {
        it("returns the comma means for the Medium level, named by the bounded commas' symbols", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.MEDIUM)

            const expected = [
                {
                    name: "(|//|) |(" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -6, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|( )|(" as Name<CommaMean>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|( ~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-5, 1, 0, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|( /|" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 9, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/| |)" as Name<CommaMean>,
                    pitch: {
                        vector: [2, 2, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|) (|" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 6, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(| (|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-14, 10, 1, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|( //|" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 10, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "//| /|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 10, -3, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|) /|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, 3, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ]
            expect(actual).toEqual(expected)
        })

        it("returns the comma means for the High level, named by the bounded commas' symbols", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.HIGH)

            const expected = [
                {
                    name: "(|//|) )|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    pitch: {
                        vector: [1, -3, 1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|( ~|" as Name<CommaMean>,
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|( )~|" as Name<CommaMean>,
                    pitch: {
                        vector: [11, -2, 0, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")~| ~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-8, 7, 0, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    pitch: {
                        vector: [-7, -1, 0, 0, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    pitch: {
                        vector: [4, -4, 0, -2, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~~| )|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-11, 11, 0, -2, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    pitch: {
                        vector: [-14, 13, -1, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/| )/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")/| |)" as Name<CommaMean>,
                    pitch: {
                        vector: [-7, 5, -1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|) )|)" as Name<CommaMean>,
                    pitch: {
                        vector: [3, -1, 0, -2, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|) |\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, -2, 1, -1, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    pitch: {
                        vector: [-13, 5, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(| ~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 7, 0, 3, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|) /|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, -3, -1, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 0, 0, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 8, 1, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|\\ //|" as Name<CommaMean>,
                    pitch: {
                        vector: [-22, 14, -2, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "//| )//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, 4, -3, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -2, -2, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    pitch: {
                        vector: [6, 0, -1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|~ /|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, -1, 0, 0, 2, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -3, 0, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(/| )/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [9, 0, 1, -4] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ]
            expect(actual).toEqual(expected)
        })

        it("returns the comma means for the Ultra level, named by the bounded commas' symbols", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.ULTRA)

            const expected = [
                {
                    name: "(|//|) .)|" as Name<CommaMean>,
                    pitch: {
                        vector: [6, -5, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'| )|" as Name<CommaMean>,
                    pitch: {
                        vector: [-24, 11, 1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    pitch: {
                        vector: [1, -3, 1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|( .~|" as Name<CommaMean>,
                    pitch: {
                        vector: [18, -7, 0, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".~| '|(" as Name<CommaMean>,
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'|( ~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 9, 2, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|( ')|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 0, 1, 2, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, 6, 1, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -1, -1, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".~|( ~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 2, -1, 0, 0, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    pitch: {
                        vector: [-7, -1, 0, 0, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    pitch: {
                        vector: [4, -4, 0, -2, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~~| ./|" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -2, -2, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    pitch: {
                        vector: [1, 5, -2, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    pitch: {
                        vector: [-14, 13, -1, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/| .)/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-2, 3, -3, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/| )/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-32, 19, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")/| .|)" as Name<CommaMean>,
                    pitch: {
                        vector: [8, -3, -2, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".|) |)" as Name<CommaMean>,
                    pitch: {
                        vector: [27, -12, -1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|) '|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, 4, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'|) )|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 7, 1, -2, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    pitch: {
                        vector: [0, 1, -1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    pitch: {
                        vector: [2, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    pitch: {
                        vector: [-13, 5, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(| '(|" as Name<CommaMean>,
                    pitch: {
                        vector: [-11, 8, 2, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'(| ~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, -1, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|) .(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [9, -7, 0, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-18, 5, 0, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 0, 0, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 8, 1, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|\\ .//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-7, 6, -3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".//| //|" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 8, -5] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "//| '//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 9, -2, 0, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'//| )//|" as Name<CommaMean>,
                    pitch: {
                        vector: [4, -3, -1, 0, 0, 2, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -2, -2, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    pitch: {
                        vector: [6, 0, -1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|~ '/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 8, 0, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/|) ./|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-3, 3, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "./|\\ /|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [5, -6, -1, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -3, 0, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(/| '/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-8, 5, 1, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/|\\ )/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-23, 13, 2, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ]
            expect(actual).toEqual(expected)
        })

        it("returns the comma means for the Extreme level, named by the bounded commas' symbols", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.EXTREME)

            const expected = [
                {
                    name: "(|//|) `|" as Name<CommaMean>,
                    pitch: {
                        vector: [12, -2, -1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`| ``|" as Name<CommaMean>,
                    pitch: {
                        vector: [17, -5, 0, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``| .)|" as Name<CommaMean>,
                    pitch: {
                        vector: [11, -8, 0, -1, -1, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'| `'|" as Name<CommaMean>,
                    pitch: {
                        vector: [-18, 14, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`'| ,)|" as Name<CommaMean>,
                    pitch: {
                        vector: [-11, 16, -4, -2, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)| )|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 13, -4, -1, 0, 0, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")| `)|" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 5, -1, 2, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`)| ``)|" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 1, 0, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``)| ,,|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-2, -4, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,|( ,|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 3, 0, 0, 0, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",|( |(" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 0, 1, -1, -1, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|( `|(" as Name<CommaMean>,
                    pitch: {
                        vector: [15, -13, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`|( .~|" as Name<CommaMean>,
                    pitch: {
                        vector: [13, -8, -2, 3, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".~| ,'|(" as Name<CommaMean>,
                    pitch: {
                        vector: [4, 8, -3, -2, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",'|( '|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 11, 0, -3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'|( ,~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-15, 3, 2, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",~| ~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 8, 0, 3, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~| ,)|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-24, 9, 0, 0, 4, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)|( )|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|( `)|(" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -11, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`)|( ``)|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 0, 2, 2, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``)|( ,')|(" as Name<CommaMean>,
                    pitch: {
                        vector: [8, 2, -2, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",')|( ')|(" as Name<CommaMean>,
                    pitch: {
                        vector: [13, -1, -1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, 6, 1, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -1, -1, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".~|( `.~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [12, -8, -1, 0, 1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`.~|( ,,~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -3, -3, 1, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,~|( ,~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [1, -3, -2, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",~|( ~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 0, 1, 2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|( `~|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 1, 0, -1, 1, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`~|( ,,|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 6, -2, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,|~ ,|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-29, 13, 0, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",|~ |~" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, -3, 2, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|~ `|~" as Name<CommaMean>,
                    pitch: {
                        vector: [14, -7, 0, 0, 0, -2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`|~ ~~|" as Name<CommaMean>,
                    pitch: {
                        vector: [8, 1, 0, -2, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~~| `~~|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 8, 0, -2, 2, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`~~| ``~~|" as Name<CommaMean>,
                    pitch: {
                        vector: [5, -3, 0, -1, 1, 0, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``~~| ,./|" as Name<CommaMean>,
                    pitch: {
                        vector: [12, -11, -1, 0, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",./| ./|" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -6, -3, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    pitch: {
                        vector: [1, 5, -2, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|~ ,,/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-2, 9, 0, 0, -1, 0, 0, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,/| ,/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-8, 6, 0, 1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",/| /|" as Name<CommaMean>,
                    pitch: {
                        vector: [-20, 10, -1, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/| `/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 1, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`/| ``/|" as Name<CommaMean>,
                    pitch: {
                        vector: [2, -8, 5, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``/| .)/|" as Name<CommaMean>,
                    pitch: {
                        vector: [9, -6, 0, 0, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/| `'/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-39, 17, 4, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`'/| ,,)/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 0, 3, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,)/| ,)/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, -2, 2, 1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)/| )/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-21, 10, 2, 0, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")/| ,.|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, -1, -1, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",.|) .|)" as Name<CommaMean>,
                    pitch: {
                        vector: [30, -18, -1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".|) `.|)" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -7, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`.|) ,,|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 4, -1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,|) ,|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-5, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",|) |)" as Name<CommaMean>,
                    pitch: {
                        vector: [0, -2, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|) `|)" as Name<CommaMean>,
                    pitch: {
                        vector: [11, -11, 4, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`|) ``|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 0, 4, 0, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``|) ,'|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-35, 17, 2, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",'|) '|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-30, 14, 3, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'|) `'|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-19, 5, 6, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`'|) ,)|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-5, -6, 6, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)|) )|)" as Name<CommaMean>,
                    pitch: {
                        vector: [2, -4, 1, -1, -1, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    pitch: {
                        vector: [0, 1, -1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    pitch: {
                        vector: [2, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "|\\ `|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [10, -8, 1, -1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`|\\ ,(|" as Name<CommaMean>,
                    pitch: {
                        vector: [7, -4, 3, -1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",(| (|" as Name<CommaMean>,
                    pitch: {
                        vector: [-16, 9, 3, 1, -1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(| `(|" as Name<CommaMean>,
                    pitch: {
                        vector: [-10, 7, 0, 1, -1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`(| ``(|" as Name<CommaMean>,
                    pitch: {
                        vector: [1, 0, -2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``(| ,'(|" as Name<CommaMean>,
                    pitch: {
                        vector: [1, 3, -2, 1, 0, -1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",'(| '(|" as Name<CommaMean>,
                    pitch: {
                        vector: [3, 2, 2, -1, 0, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'(| ,~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",~|) ~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, -6, 0, 2, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|) `~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-20, 8, -1, 2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`~|) ,.(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-26, 16, -1, 0, 1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",.(|( .(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [3, 1, 0, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    pitch: {
                        vector: [-18, 5, 0, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|~ ,,(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,(|( ,(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [0, 1, 0, 1, 1, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",(|( (|(" as Name<CommaMean>,
                    pitch: {
                        vector: [5, -2, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|( `(|(" as Name<CommaMean>,
                    pitch: {
                        vector: [8, 2, 1, -1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`(|( ~|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, 6, 0, -1, -1, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "~|\\ ,.//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-19, 8, -2, 1, 0, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",.//| .//|" as Name<CommaMean>,
                    pitch: {
                        vector: [2, 2, -5, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ".//| `.//|" as Name<CommaMean>,
                    pitch: {
                        vector: [13, -7, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`.//| ,,//|" as Name<CommaMean>,
                    pitch: {
                        vector: [0, -4, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,//| ,//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-26, 13, -1, 0, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",//| //|" as Name<CommaMean>,
                    pitch: {
                        vector: [-28, 18, -3, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "//| `//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-17, 9, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`//| ``//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 0, 3, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``//| ,'//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-8, 5, 1, 2, 0, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",'//| '//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 7, 0, 2, 0, 1, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'//| ,,)//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-1, 0, -2, 1, 1, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,)//| ,)//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-12, 6, 0, 1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)//| )//|" as Name<CommaMean>,
                    pitch: {
                        vector: [-7, 3, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ")//| `)//|" as Name<CommaMean>,
                    pitch: {
                        vector: [22, -10, -3, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`)//| ``)//|" as Name<CommaMean>,
                    pitch: {
                        vector: [15, -8, -2, -1, 0, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "``)//| ,,/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-5, 3, -2, 0, 1, -1, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,/|) ,/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-13, 9, -2, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",/|) /|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-8, 6, -1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|) `/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [3, -3, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`/|) (|~" as Name<CommaMean>,
                    pitch: {
                        vector: [5, -7, 3, 0, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(|~ ,'/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-21, 10, 1, 0, 1, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",'/|) '/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-38, 22, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/|) `'/|)" as Name<CommaMean>,
                    pitch: {
                        vector: [-27, 13, 4, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`'/|) ./|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-4, -4, 3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "./|\\ `./|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [11, -8, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`./|\\ ,,/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [8, -4, 1, 0, -1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",,/|\\ ,/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [6, 1, -1, 1, -1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",/|\\ /|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-6, 5, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "/|\\ `/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-19, 8, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`/|\\ ,(/|" as Name<CommaMean>,
                    pitch: {
                        vector: [-14, 5, 2, -1, -1, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",(/| (/|" as Name<CommaMean>,
                    pitch: {
                        vector: [12, -6, 1, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "(/| `(/|" as Name<CommaMean>,
                    pitch: {
                        vector: [17, -4, 0, -2, 0, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`(/| '/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "'/|\\ `'/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-28, 16, 1, -1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: "`'/|\\ ,)/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-14, 5, 1, 0, 1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
                {
                    name: ",)/|\\ )/|\\" as Name<CommaMean>,
                    pitch: {
                        vector: [-9, 2, 2, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ]
            expect(actual).toEqual(expected)
        })
    })

    describe("it has the right values for the pitches", (): void => {
        it("works for the Medium level", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.MEDIUM).map(
                (levelCommaMean: CommaMean): PitchExpectation<Irrational> =>
                    computePitchExpectation(levelCommaMean.pitch),
            )

            const expected = [
                {
                    pitch: {
                        vector: [10, -6, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -3, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.001664 as Decimal<Irrational>,
                    cents: 2.878901 as Cents,
                },
                {
                    pitch: {
                        vector: [17, -10, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [8.5, -5, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.00447 as Decimal<Irrational>,
                    cents: 7.722881 as Cents,
                },
                {
                    pitch: {
                        vector: [-5, 1, 0, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2.5, 0.5, 0, 0.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.007077 as Decimal<Irrational>,
                    cents: 12.209187 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 9, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 4.5, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.01052 as Decimal<Irrational>,
                    cents: 18.118351 as Cents,
                },
                {
                    pitch: {
                        vector: [2, 2, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, 1, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.014185 as Decimal<Irrational>,
                    cents: 24.38519 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 6, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 3, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.0176 as Decimal<Irrational>,
                    cents: 30.206031 as Cents,
                },
                {
                    pitch: {
                        vector: [-14, 10, 1, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7, 5, 0.5, 0.5, -1] as Vector<Irrational>,
                    decimal: 1.021027 as Decimal<Irrational>,
                    cents: 36.026872 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 10, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 5, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.023941 as Decimal<Irrational>,
                    cents: 40.959176 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 10, -3, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 5, -1.5, -0.5] as Vector<Irrational>,
                    decimal: 1.026862 as Decimal<Irrational>,
                    cents: 45.89148 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, 3, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, 1.5, -0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.029909 as Decimal<Irrational>,
                    cents: 51.021662 as Cents,
                },
            ]
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for the High level", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.HIGH).map(
                (levelCommaMean: CommaMean): PitchExpectation<Irrational> =>
                    computePitchExpectation(levelCommaMean.pitch),
            )

            const expected = [
                {
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 1.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.000976 as Decimal<Irrational>,
                    cents: 1.689009 as Cents,
                },
                {
                    pitch: {
                        vector: [1, -3, 1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, -1.5, 0.5, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.002642 as Decimal<Irrational>,
                    cents: 4.56791 as Cents,
                },
                {
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, 0.5, 0.5, -0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.004192 as Decimal<Irrational>,
                    cents: 7.243699 as Cents,
                },
                {
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, 1.5, 0, 0.5, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.005333 as Decimal<Irrational>,
                    cents: 9.208778 as Cents,
                },
                {
                    pitch: {
                        vector: [11, -2, 0, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5.5, -1, 0, 0.5, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.006302 as Decimal<Irrational>,
                    cents: 10.876179 as Cents,
                },
                {
                    pitch: {
                        vector: [-8, 7, 0, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4, 3.5, 0, 0, -0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.007768 as Decimal<Irrational>,
                    cents: 13.397405 as Cents,
                },
                {
                    pitch: {
                        vector: [-7, -1, 0, 0, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3.5, -0.5, 0, 0, 0, 0, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009073 as Decimal<Irrational>,
                    cents: 15.637377 as Cents,
                },
                {
                    pitch: {
                        vector: [4, -4, 0, -2, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2, -2, 0, -1, 0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009903 as Decimal<Irrational>,
                    cents: 17.060236 as Cents,
                },
                {
                    pitch: {
                        vector: [-11, 11, 0, -2, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5.5, 5.5, 0, -1, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.010935 as Decimal<Irrational>,
                    cents: 18.829061 as Cents,
                },
                {
                    pitch: {
                        vector: [-14, 13, -1, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7, 6.5, -0.5, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.012083 as Decimal<Irrational>,
                    cents: 20.79414 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 5.5, -1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.013488 as Decimal<Irrational>,
                    cents: 23.195298 as Cents,
                },
                {
                    pitch: {
                        vector: [-7, 5, -1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3.5, 2.5, -0.5, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.015175 as Decimal<Irrational>,
                    cents: 26.0742 as Cents,
                },
                {
                    pitch: {
                        vector: [3, -1, 0, -2, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, -0.5, 0, -1, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.016864 as Decimal<Irrational>,
                    cents: 28.953101 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, -2, 1, -1, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, -1, 0.5, -0.5, 0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.018187 as Decimal<Irrational>,
                    cents: 31.204382 as Cents,
                },
                {
                    pitch: {
                        vector: [-13, 5, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6.5, 2.5, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.018924 as Decimal<Irrational>,
                    cents: 32.457312 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 7, 0, 3, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 3.5, 0, 1.5, -0.5] as Vector<Irrational>,
                    decimal: 1.020082 as Decimal<Irrational>,
                    cents: 34.422391 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, -3, -1, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, -1.5, -0.5, 1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.021527 as Decimal<Irrational>,
                    cents: 36.873721 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 0, 0, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 0, 0, 0, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.022474 as Decimal<Irrational>,
                    cents: 38.478202 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 8, 1, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 4, 0.5, 0, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023051 as Decimal<Irrational>,
                    cents: 39.455062 as Cents,
                },
                {
                    pitch: {
                        vector: [-22, 14, -2, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-11, 7, -1, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.024265 as Decimal<Irrational>,
                    cents: 41.508465 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, 4, -3, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, 2, -1.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.026157 as Decimal<Irrational>,
                    cents: 44.703261 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -2, -2, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -1, -1, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.027865 as Decimal<Irrational>,
                    cents: 47.582162 as Cents,
                },
                {
                    pitch: {
                        vector: [6, 0, -1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3, 0, -0.5, -0.5, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.028905 as Decimal<Irrational>,
                    cents: 49.332652 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, -1, 0, 0, 2, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, -0.5, 0, 0, 1, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.030244 as Decimal<Irrational>,
                    cents: 51.583933 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -3, 0, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -1.5, 0, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.031623 as Decimal<Irrational>,
                    cents: 53.900563 as Cents,
                },
                {
                    pitch: {
                        vector: [9, 0, 1, -4] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4.5, 0, 0.5, -2] as Vector<Irrational>,
                    decimal: 1.03258 as Decimal<Irrational>,
                    cents: 55.505043 as Cents,
                },
            ]
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for the Ultra level", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.ULTRA).map(
                (levelCommaMean: CommaMean): PitchExpectation<Irrational> =>
                    computePitchExpectation(levelCommaMean.pitch),
            )

            const expected = [
                {
                    pitch: {
                        vector: [6, -5, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3, -2.5, -0.5, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.000411 as Decimal<Irrational>,
                    cents: 0.712148 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 1.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.000976 as Decimal<Irrational>,
                    cents: 1.689009 as Cents,
                },
                {
                    pitch: {
                        vector: [-24, 11, 1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-12, 5.5, 0.5, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.001541 as Decimal<Irrational>,
                    cents: 2.665869 as Cents,
                },
                {
                    pitch: {
                        vector: [1, -3, 1, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, -1.5, 0.5, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.002642 as Decimal<Irrational>,
                    cents: 4.56791 as Cents,
                },
                {
                    pitch: {
                        vector: [18, -7, 0, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [9, -3.5, 0, -0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.003626 as Decimal<Irrational>,
                    cents: 6.266838 as Cents,
                },
                {
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, 0.5, 0.5, -0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.004192 as Decimal<Irrational>,
                    cents: 7.243699 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 9, 2, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 4.5, 1, -0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.004759 as Decimal<Irrational>,
                    cents: 8.220559 as Cents,
                },
                {
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, 1.5, 0, 0.5, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.005333 as Decimal<Irrational>,
                    cents: 9.208778 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 0, 1, 2, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 0, 0.5, 1, -1] as Vector<Irrational>,
                    decimal: 1.006179 as Decimal<Irrational>,
                    cents: 10.664821 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, 6, 1, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, 3, 0.5, 0.5, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.00687 as Decimal<Irrational>,
                    cents: 11.853039 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -1, -1, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -0.5, -0.5, 0, -0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.0072 as Decimal<Irrational>,
                    cents: 12.420545 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 2, -1, 0, 0, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 1, -0.5, 0, 0, 0, 1] as Vector<Irrational>,
                    decimal: 1.007976 as Decimal<Irrational>,
                    cents: 13.753553 as Cents,
                },
                {
                    pitch: {
                        vector: [-7, -1, 0, 0, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3.5, -0.5, 0, 0, 0, 0, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009073 as Decimal<Irrational>,
                    cents: 15.637377 as Cents,
                },
                {
                    pitch: {
                        vector: [4, -4, 0, -2, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2, -2, 0, -1, 0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009903 as Decimal<Irrational>,
                    cents: 17.060236 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -2, -2, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -1, -1, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.01078 as Decimal<Irrational>,
                    cents: 18.564349 as Cents,
                },
                {
                    pitch: {
                        vector: [1, 5, -2, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, 2.5, -1, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.011512 as Decimal<Irrational>,
                    cents: 19.81728 as Cents,
                },
                {
                    pitch: {
                        vector: [-14, 13, -1, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7, 6.5, -0.5, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.012083 as Decimal<Irrational>,
                    cents: 20.79414 as Cents,
                },
                {
                    pitch: {
                        vector: [-2, 3, -3, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1, 1.5, -1.5, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.012916 as Decimal<Irrational>,
                    cents: 22.218438 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 5.5, -1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.013488 as Decimal<Irrational>,
                    cents: 23.195298 as Cents,
                },
                {
                    pitch: {
                        vector: [-32, 19, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-16, 9.5, -0.5, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.01406 as Decimal<Irrational>,
                    cents: 24.172159 as Cents,
                },
                {
                    pitch: {
                        vector: [8, -3, -2, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4, -1.5, -1, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.014602 as Decimal<Irrational>,
                    cents: 25.097339 as Cents,
                },
                {
                    pitch: {
                        vector: [27, -12, -1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [13.5, -6, -0.5, -1] as Vector<Irrational>,
                    decimal: 1.015299 as Decimal<Irrational>,
                    cents: 26.287231 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, 4, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, 2, 0.5, -1] as Vector<Irrational>,
                    decimal: 1.016446 as Decimal<Irrational>,
                    cents: 28.240952 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 7, 1, -2, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 3.5, 0.5, -1, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.017438 as Decimal<Irrational>,
                    cents: 29.929961 as Cents,
                },
                {
                    pitch: {
                        vector: [0, 1, -1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, 0.5, -0.5, 0, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.018019 as Decimal<Irrational>,
                    cents: 30.91818 as Cents,
                },
                {
                    pitch: {
                        vector: [2, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, -1.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.01835 as Decimal<Irrational>,
                    cents: 31.480451 as Cents,
                },
                {
                    pitch: {
                        vector: [-13, 5, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6.5, 2.5, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.018924 as Decimal<Irrational>,
                    cents: 32.457312 as Cents,
                },
                {
                    pitch: {
                        vector: [-11, 8, 2, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5.5, 4, 1, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.019869 as Decimal<Irrational>,
                    cents: 34.061792 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, -1, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, -0.5, 1] as Vector<Irrational>,
                    decimal: 1.02062 as Decimal<Irrational>,
                    cents: 35.336213 as Cents,
                },
                {
                    pitch: {
                        vector: [9, -7, 0, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4.5, -3.5, 0, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.021203 as Decimal<Irrational>,
                    cents: 36.324432 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 0.5, 0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.021779 as Decimal<Irrational>,
                    cents: 37.301292 as Cents,
                },
                {
                    pitch: {
                        vector: [-18, 5, 0, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9, 2.5, 0, 1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.022104 as Decimal<Irrational>,
                    cents: 37.850582 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 0, 0, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 0, 0, 0, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.022474 as Decimal<Irrational>,
                    cents: 38.478202 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 8, 1, 0, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 4, 0.5, 0, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023051 as Decimal<Irrational>,
                    cents: 39.455062 as Cents,
                },
                {
                    pitch: {
                        vector: [-7, 6, -3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3.5, 3, -1.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023688 as Decimal<Irrational>,
                    cents: 40.531605 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 8, -5] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 4, -2.5] as Vector<Irrational>,
                    decimal: 1.024577 as Decimal<Irrational>,
                    cents: 42.035718 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 9, -2, 0, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 4.5, -1, 0, 0, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.025735 as Decimal<Irrational>,
                    cents: 43.991112 as Cents,
                },
                {
                    pitch: {
                        vector: [4, -3, -1, 0, 0, 2, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2, -1.5, -0.5, 0, 0, 1, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.026738 as Decimal<Irrational>,
                    cents: 45.681795 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -2, -2, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -1, -1, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.027865 as Decimal<Irrational>,
                    cents: 47.582162 as Cents,
                },
                {
                    pitch: {
                        vector: [6, 0, -1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3, 0, -0.5, -0.5, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.028905 as Decimal<Irrational>,
                    cents: 49.332652 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 8, 0, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 4, 0, -0.5, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.029486 as Decimal<Irrational>,
                    cents: 50.309513 as Cents,
                },
                {
                    pitch: {
                        vector: [-3, 3, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1.5, 1.5, -0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.029909 as Decimal<Irrational>,
                    cents: 51.021662 as Cents,
                },
                {
                    pitch: {
                        vector: [5, -6, -1, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2.5, -3, -0.5, 0, 1] as Vector<Irrational>,
                    decimal: 1.030668 as Decimal<Irrational>,
                    cents: 52.296082 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -3, 0, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -1.5, 0, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.031623 as Decimal<Irrational>,
                    cents: 53.900563 as Cents,
                },
                {
                    pitch: {
                        vector: [-8, 5, 1, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4, 2.5, 0.5, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.032206 as Decimal<Irrational>,
                    cents: 54.877423 as Cents,
                },
                {
                    pitch: {
                        vector: [-23, 13, 2, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-11.5, 6.5, 1, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.032788 as Decimal<Irrational>,
                    cents: 55.854284 as Cents,
                },
            ]
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for the Extreme level", (): void => {
            const actual = computeJiNotationLevelCommaMeans(JiNotationLevelId.EXTREME).map(
                (levelCommaMean: CommaMean): PitchExpectation<Irrational> =>
                    computePitchExpectation(levelCommaMean.pitch),
            )

            const expected = [
                {
                    pitch: {
                        vector: [12, -2, -1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6, -1, -0.5, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.000122 as Decimal<Irrational>,
                    cents: 0.211358 as Cents,
                },
                {
                    pitch: {
                        vector: [17, -5, 0, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [8.5, -2.5, 0, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.000362 as Decimal<Irrational>,
                    cents: 0.62762 as Cents,
                },
                {
                    pitch: {
                        vector: [11, -8, 0, -1, -1, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5.5, -4, 0, -0.5, -0.5, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.000652 as Decimal<Irrational>,
                    cents: 1.128411 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 1.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.000976 as Decimal<Irrational>,
                    cents: 1.689009 as Cents,
                },
                {
                    pitch: {
                        vector: [-18, 14, 1, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9, 7, 0.5, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.001251 as Decimal<Irrational>,
                    cents: 2.165078 as Cents,
                },
                {
                    pitch: {
                        vector: [-11, 16, -4, -2, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5.5, 8, -2, -1, 0, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.001548 as Decimal<Irrational>,
                    cents: 2.679349 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 13, -4, -1, 0, 0, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 6.5, -2, -0.5, 0, 0, 0, 1] as Vector<Irrational>,
                    decimal: 1.001838 as Decimal<Irrational>,
                    cents: 3.18014 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 5, -1, 2, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 2.5, -0.5, 1, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.002112 as Decimal<Irrational>,
                    cents: 3.654088 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 1, 0, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 0.5, 0, 1.5] as Vector<Irrational>,
                    decimal: 1.002438 as Decimal<Irrational>,
                    cents: 4.21636 as Cents,
                },
                {
                    pitch: {
                        vector: [-2, -4, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1, -2, 0.5, 0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.002726 as Decimal<Irrational>,
                    cents: 4.713919 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 3, 0, 0, 0, -1, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 1.5, 0, 0, 0, -0.5, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.003 as Decimal<Irrational>,
                    cents: 5.186456 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 0, 1, -1, -1, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 0, 0.5, -0.5, -0.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.003241 as Decimal<Irrational>,
                    cents: 5.602718 as Cents,
                },
                {
                    pitch: {
                        vector: [15, -13, 0, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [7.5, -6.5, 0, 1] as Vector<Irrational>,
                    decimal: 1.00354 as Decimal<Irrational>,
                    cents: 6.1184 as Cents,
                },
                {
                    pitch: {
                        vector: [13, -8, -2, 3, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6.5, -4, -1, 1.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.003835 as Decimal<Irrational>,
                    cents: 6.627437 as Cents,
                },
                {
                    pitch: {
                        vector: [4, 8, -3, -2, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2, 4, -1.5, -1, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.004078 as Decimal<Irrational>,
                    cents: 7.045821 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 11, 0, -3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 5.5, 0, -1.5] as Vector<Irrational>,
                    decimal: 1.004349 as Decimal<Irrational>,
                    cents: 7.513645 as Cents,
                },
                {
                    pitch: {
                        vector: [-15, 3, 2, 2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7.5, 1.5, 1, 1] as Vector<Irrational>,
                    decimal: 1.004673 as Decimal<Irrational>,
                    cents: 8.072121 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 8, 0, 3, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 4, 0, 1.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.004968 as Decimal<Irrational>,
                    cents: 8.581158 as Cents,
                },
                {
                    pitch: {
                        vector: [-24, 9, 0, 0, 4, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-12, 4.5, 0, 0, 2, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.005186 as Decimal<Irrational>,
                    cents: 8.955683 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, -2, 0, 1, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, -1, 0, 0.5, 1.5] as Vector<Irrational>,
                    decimal: 1.005464 as Decimal<Irrational>,
                    cents: 9.434865 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -11, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -5.5, 1, 0.5] as Vector<Irrational>,
                    decimal: 1.005777 as Decimal<Irrational>,
                    cents: 9.974162 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 0, 2, 2, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 0, 1, 1, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.006103 as Decimal<Irrational>,
                    cents: 10.53476 as Cents,
                },
                {
                    pitch: {
                        vector: [8, 2, -2, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4, 1, -1, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.006353 as Decimal<Irrational>,
                    cents: 10.964502 as Cents,
                },
                {
                    pitch: {
                        vector: [13, -1, -1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6.5, -0.5, -0.5, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.006595 as Decimal<Irrational>,
                    cents: 11.380764 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, 6, 1, 1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, 3, 0.5, 0.5, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.00687 as Decimal<Irrational>,
                    cents: 11.853039 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -1, -1, 0, -1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -0.5, -0.5, 0, -0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.0072 as Decimal<Irrational>,
                    cents: 12.420545 as Cents,
                },
                {
                    pitch: {
                        vector: [12, -8, -1, 0, 1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6, -4, -0.5, 0, 0.5, 0, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.00755 as Decimal<Irrational>,
                    cents: 13.022641 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -3, -3, 1, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -1.5, -1.5, 0.5, 0.5, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.007846 as Decimal<Irrational>,
                    cents: 13.531678 as Cents,
                },
                {
                    pitch: {
                        vector: [1, -3, -2, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, -1.5, -1, 1.5] as Vector<Irrational>,
                    decimal: 1.008115 as Decimal<Irrational>,
                    cents: 13.992644 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 0, 1, 2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 0, 0.5, 1, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.008387 as Decimal<Irrational>,
                    cents: 14.460468 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 1, 0, -1, 1, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 0.5, 0, -0.5, 0.5, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.008681 as Decimal<Irrational>,
                    cents: 14.965054 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 6, -2, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 3, -1, 0, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.008978 as Decimal<Irrational>,
                    cents: 15.47409 as Cents,
                },
                {
                    pitch: {
                        vector: [-29, 13, 0, 3] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-14.5, 6.5, 0, 1.5] as Vector<Irrational>,
                    decimal: 1.009253 as Decimal<Irrational>,
                    cents: 15.946365 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, -3, 2, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, -1.5, 1, 1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009485 as Decimal<Irrational>,
                    cents: 16.344292 as Cents,
                },
                {
                    pitch: {
                        vector: [14, -7, 0, 0, 0, -2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [7, -3.5, 0, 0, 0, -1, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.009732 as Decimal<Irrational>,
                    cents: 16.767008 as Cents,
                },
                {
                    pitch: {
                        vector: [8, 1, 0, -2, 1, -2] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4, 0.5, 0, -1, 0.5, -1] as Vector<Irrational>,
                    decimal: 1.010032 as Decimal<Irrational>,
                    cents: 17.282903 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 8, 0, -2, 2, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 4, 0, -1, 1, 0, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.010331 as Decimal<Irrational>,
                    cents: 17.794253 as Cents,
                },
                {
                    pitch: {
                        vector: [5, -3, 0, -1, 1, 0, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2.5, -1.5, 0, -0.5, 0.5, 0, 0.5, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.010611 as Decimal<Irrational>,
                    cents: 18.273435 as Cents,
                },
                {
                    pitch: {
                        vector: [12, -11, -1, 0, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6, -5.5, -0.5, 0, 0, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.010937 as Decimal<Irrational>,
                    cents: 18.832173 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -6, -3, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -3, -1.5, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.011234 as Decimal<Irrational>,
                    cents: 19.34121 as Cents,
                },
                {
                    pitch: {
                        vector: [1, 5, -2, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, 2.5, -1, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.011512 as Decimal<Irrational>,
                    cents: 19.81728 as Cents,
                },
                {
                    pitch: {
                        vector: [-2, 9, 0, 0, -1, 0, 0, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-1, 4.5, 0, 0, -0.5, 0, 0, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.011762 as Decimal<Irrational>,
                    cents: 20.244851 as Cents,
                },
                {
                    pitch: {
                        vector: [-8, 6, 0, 1, -1, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4, 3, 0, 0.5, -0.5, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.012055 as Decimal<Irrational>,
                    cents: 20.745641 as Cents,
                },
                {
                    pitch: {
                        vector: [-20, 10, -1, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-10, 5, -0.5, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.012376 as Decimal<Irrational>,
                    cents: 21.294931 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 1, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 0.5, 1, 0.5] as Vector<Irrational>,
                    decimal: 1.012615 as Decimal<Irrational>,
                    cents: 21.704167 as Cents,
                },
                {
                    pitch: {
                        vector: [2, -8, 5, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, -4, 2.5, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.012855 as Decimal<Irrational>,
                    cents: 22.113403 as Cents,
                },
                {
                    pitch: {
                        vector: [9, -6, 0, 0, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4.5, -3, 0, 0, 0, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.013156 as Decimal<Irrational>,
                    cents: 22.627674 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 11, -2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 5.5, -1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.013488 as Decimal<Irrational>,
                    cents: 23.195298 as Cents,
                },
                {
                    pitch: {
                        vector: [-39, 17, 4, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-19.5, 8.5, 2, 0.5] as Vector<Irrational>,
                    decimal: 1.013759 as Decimal<Irrational>,
                    cents: 23.657888 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 0, 3, 2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 0, 1.5, 1, 0.5] as Vector<Irrational>,
                    decimal: 1.013933 as Decimal<Irrational>,
                    cents: 23.955448 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, -2, 2, 1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, -1, 1, 0.5, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.014057 as Decimal<Irrational>,
                    cents: 24.166806 as Cents,
                },
                {
                    pitch: {
                        vector: [-21, 10, 2, 0, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-10.5, 5, 1, 0, 0, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.0143 as Decimal<Irrational>,
                    cents: 24.581395 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, -1, -1, 0, 0, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, -0.5, -0.5, 0, 0, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.014478 as Decimal<Irrational>,
                    cents: 24.885981 as Cents,
                },
                {
                    pitch: {
                        vector: [30, -18, -1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [15, -9, -0.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.014603 as Decimal<Irrational>,
                    cents: 25.099012 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -7, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -3.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.014931 as Decimal<Irrational>,
                    cents: 25.659611 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 4, -1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 2, -0.5, 0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.01526 as Decimal<Irrational>,
                    cents: 26.220209 as Cents,
                },
                {
                    pitch: {
                        vector: [-5, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2.5, 0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.015504 as Decimal<Irrational>,
                    cents: 26.636471 as Cents,
                },
                {
                    pitch: {
                        vector: [0, -2, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, -1, 0.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.015749 as Decimal<Irrational>,
                    cents: 27.052733 as Cents,
                },
                {
                    pitch: {
                        vector: [11, -11, 4, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5.5, -5.5, 2, -0.5] as Vector<Irrational>,
                    decimal: 1.015989 as Decimal<Irrational>,
                    cents: 27.461969 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 0, 4, 0, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 0, 2, 0, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.016318 as Decimal<Irrational>,
                    cents: 28.022568 as Cents,
                },
                {
                    pitch: {
                        vector: [-35, 17, 2, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-17.5, 8.5, 1, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.016651 as Decimal<Irrational>,
                    cents: 28.590192 as Cents,
                },
                {
                    pitch: {
                        vector: [-30, 14, 3, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-15, 7, 1.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.016895 as Decimal<Irrational>,
                    cents: 29.006454 as Cents,
                },
                {
                    pitch: {
                        vector: [-19, 5, 6, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9.5, 2.5, 3, -0.5] as Vector<Irrational>,
                    decimal: 1.017136 as Decimal<Irrational>,
                    cents: 29.41569 as Cents,
                },
                {
                    pitch: {
                        vector: [-5, -6, 6, 0, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2.5, -3, 3, 0, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.017417 as Decimal<Irrational>,
                    cents: 29.894872 as Cents,
                },
                {
                    pitch: {
                        vector: [2, -4, 1, -1, -1, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, -2, 0.5, -0.5, -0.5, 0, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.01772 as Decimal<Irrational>,
                    cents: 30.409143 as Cents,
                },
                {
                    pitch: {
                        vector: [0, 1, -1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, 0.5, -0.5, 0, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.018019 as Decimal<Irrational>,
                    cents: 30.91818 as Cents,
                },
                {
                    pitch: {
                        vector: [2, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, -1.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.01835 as Decimal<Irrational>,
                    cents: 31.480451 as Cents,
                },
                {
                    pitch: {
                        vector: [10, -8, 1, -1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5, -4, 0.5, -0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.018642 as Decimal<Irrational>,
                    cents: 31.978011 as Cents,
                },
                {
                    pitch: {
                        vector: [7, -4, 3, -1, 1, -1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3.5, -2, 1.5, -0.5, 0.5, -0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.018894 as Decimal<Irrational>,
                    cents: 32.405582 as Cents,
                },
                {
                    pitch: {
                        vector: [-16, 9, 3, 1, -1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8, 4.5, 1.5, 0.5, -0.5, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.019176 as Decimal<Irrational>,
                    cents: 32.884883 as Cents,
                },
                {
                    pitch: {
                        vector: [-10, 7, 0, 1, -1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-5, 3.5, 0, 0.5, -0.5, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.019469 as Decimal<Irrational>,
                    cents: 33.382611 as Cents,
                },
                {
                    pitch: {
                        vector: [1, 0, -2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, 0, -1, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.019803 as Decimal<Irrational>,
                    cents: 33.950117 as Cents,
                },
                {
                    pitch: {
                        vector: [1, 3, -2, 1, 0, -1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0.5, 1.5, -1, 0.5, 0, -0.5, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.020121 as Decimal<Irrational>,
                    cents: 34.489106 as Cents,
                },
                {
                    pitch: {
                        vector: [3, 2, 2, -1, 0, -1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, 1, 1, -0.5, 0, -0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.020325 as Decimal<Irrational>,
                    cents: 34.835422 as Cents,
                },
                {
                    pitch: {
                        vector: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2, -2.5, 1, -1, 0, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.020492 as Decimal<Irrational>,
                    cents: 35.118091 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, -6, 0, 2, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, -3, 0, 1, 0, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.020704 as Decimal<Irrational>,
                    cents: 35.47869 as Cents,
                },
                {
                    pitch: {
                        vector: [-20, 8, -1, 2, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-10, 4, -0.5, 1, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.020992 as Decimal<Irrational>,
                    cents: 35.966757 as Cents,
                },
                {
                    pitch: {
                        vector: [-26, 16, -1, 0, 1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-13, 8, -0.5, 0, 0.5, 0, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.021296 as Decimal<Irrational>,
                    cents: 36.482652 as Cents,
                },
                {
                    pitch: {
                        vector: [3, 1, 0, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, 0.5, 0, 0, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.021507 as Decimal<Irrational>,
                    cents: 36.840326 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 1, 1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 0.5, 0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.021779 as Decimal<Irrational>,
                    cents: 37.301292 as Cents,
                },
                {
                    pitch: {
                        vector: [-18, 5, 0, 2, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9, 2.5, 0, 1, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.022104 as Decimal<Irrational>,
                    cents: 37.850582 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 1.5, -0.5, 0.5, 0, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.022228 as Decimal<Irrational>,
                    cents: 38.06194 as Cents,
                },
                {
                    pitch: {
                        vector: [0, 1, 0, 1, 1, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, 0.5, 0, 0.5, 0.5, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.022374 as Decimal<Irrational>,
                    cents: 38.307889 as Cents,
                },
                {
                    pitch: {
                        vector: [5, -2, 1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2.5, -1, 0.5, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.022619 as Decimal<Irrational>,
                    cents: 38.724151 as Cents,
                },
                {
                    pitch: {
                        vector: [8, 2, 1, -1, -2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4, 1, 0.5, -0.5, -1, -0.5] as Vector<Irrational>,
                    decimal: 1.022852 as Decimal<Irrational>,
                    cents: 39.117131 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, 6, 0, -1, -1, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, 3, 0, -0.5, -0.5, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023176 as Decimal<Irrational>,
                    cents: 39.66642 as Cents,
                },
                {
                    pitch: {
                        vector: [-19, 8, -2, 1, 0, 1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9.5, 4, -1, 0.5, 0, 0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023563 as Decimal<Irrational>,
                    cents: 40.320247 as Cents,
                },
                {
                    pitch: {
                        vector: [2, 2, -5, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1, 1, -2.5, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.023874 as Decimal<Irrational>,
                    cents: 40.8475 as Cents,
                },
                {
                    pitch: {
                        vector: [13, -7, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6.5, -3.5, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.024117 as Decimal<Irrational>,
                    cents: 41.256736 as Cents,
                },
                {
                    pitch: {
                        vector: [0, -4, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [0, -2, 0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.024393 as Decimal<Irrational>,
                    cents: 41.724559 as Cents,
                },
                {
                    pitch: {
                        vector: [-26, 13, -1, 0, 0, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-13, 6.5, -0.5, 0, 0, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.024729 as Decimal<Irrational>,
                    cents: 42.292184 as Cents,
                },
                {
                    pitch: {
                        vector: [-28, 18, -3, 1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-14, 9, -1.5, 0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.025031 as Decimal<Irrational>,
                    cents: 42.801221 as Cents,
                },
                {
                    pitch: {
                        vector: [-17, 9, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-8.5, 4.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.025273 as Decimal<Irrational>,
                    cents: 43.210457 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 0, 3, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 0, 1.5, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.025515 as Decimal<Irrational>,
                    cents: 43.619693 as Cents,
                },
                {
                    pitch: {
                        vector: [-8, 5, 1, 2, 0, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4, 2.5, 0.5, 1, 0, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.025817 as Decimal<Irrational>,
                    cents: 44.128729 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 7, 0, 2, 0, 1, -1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 3.5, 0, 1, 0, 0.5, -0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.026154 as Decimal<Irrational>,
                    cents: 44.698027 as Cents,
                },
                {
                    pitch: {
                        vector: [-1, 0, -2, 1, 1, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-0.5, 0, -1, 0.5, 0.5, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.026491 as Decimal<Irrational>,
                    cents: 45.265533 as Cents,
                },
                {
                    pitch: {
                        vector: [-12, 6, 0, 1, 1, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6, 3, 0, 0.5, 0.5, -0.5] as Vector<Irrational>,
                    decimal: 1.026732 as Decimal<Irrational>,
                    cents: 45.673096 as Cents,
                },
                {
                    pitch: {
                        vector: [-7, 3, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3.5, 1.5, 0.5] as Vector<Irrational>,
                    decimal: 1.026979 as Decimal<Irrational>,
                    cents: 46.089358 as Cents,
                },
                {
                    pitch: {
                        vector: [22, -10, -3, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [11, -5, -1.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.027285 as Decimal<Irrational>,
                    cents: 46.605302 as Cents,
                },
                {
                    pitch: {
                        vector: [15, -8, -2, -1, 0, 0, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [7.5, -4, -1, -0.5, 0, 0, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.027594 as Decimal<Irrational>,
                    cents: 47.125348 as Cents,
                },
                {
                    pitch: {
                        vector: [-5, 3, -2, 0, 1, -1, 0, 0, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2.5, 1.5, -1, 0, 0.5, -0.5, 0, 0, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.027927 as Decimal<Irrational>,
                    cents: 47.685947 as Cents,
                },
                {
                    pitch: {
                        vector: [-13, 9, -2, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-6.5, 4.5, -1, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.028198 as Decimal<Irrational>,
                    cents: 48.142761 as Cents,
                },
                {
                    pitch: {
                        vector: [-8, 6, -1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4, 3, -0.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.028445 as Decimal<Irrational>,
                    cents: 48.559023 as Cents,
                },
                {
                    pitch: {
                        vector: [3, -3, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [1.5, -1.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.028688 as Decimal<Irrational>,
                    cents: 48.968259 as Cents,
                },
                {
                    pitch: {
                        vector: [5, -7, 3, 0, 1, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [2.5, -3.5, 1.5, 0, 0.5, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.029023 as Decimal<Irrational>,
                    cents: 49.53053 as Cents,
                },
                {
                    pitch: {
                        vector: [-21, 10, 1, 0, 1, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-10.5, 5, 0.5, 0, 0.5, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.02936 as Decimal<Irrational>,
                    cents: 50.098155 as Cents,
                },
                {
                    pitch: {
                        vector: [-38, 22, 1, -1, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-19, 11, 0.5, -0.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.029607 as Decimal<Irrational>,
                    cents: 50.512744 as Cents,
                },
                {
                    pitch: {
                        vector: [-27, 13, 4, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-13.5, 6.5, 2, -0.5] as Vector<Irrational>,
                    decimal: 1.02985 as Decimal<Irrational>,
                    cents: 50.92198 as Cents,
                },
                {
                    pitch: {
                        vector: [-4, -4, 3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-2, -2, 1.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.030027 as Decimal<Irrational>,
                    cents: 51.21954 as Cents,
                },
                {
                    pitch: {
                        vector: [11, -8, -1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [5.5, -4, -0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.030194 as Decimal<Irrational>,
                    cents: 51.500844 as Cents,
                },
                {
                    pitch: {
                        vector: [8, -4, 1, 0, -1, 0, 1, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [4, -2, 0.5, 0, -0.5, 0, 0.5, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.030449 as Decimal<Irrational>,
                    cents: 51.928415 as Cents,
                },
                {
                    pitch: {
                        vector: [6, 1, -1, 1, -1, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [3, 0.5, -0.5, 0.5, -0.5, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.030752 as Decimal<Irrational>,
                    cents: 52.437451 as Cents,
                },
                {
                    pitch: {
                        vector: [-6, 5, -2, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-3, 2.5, -1, 0.5] as Vector<Irrational>,
                    decimal: 1.031079 as Decimal<Irrational>,
                    cents: 52.986741 as Cents,
                },
                {
                    pitch: {
                        vector: [-19, 8, 1, 0, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-9.5, 4, 0.5, 0, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.031358 as Decimal<Irrational>,
                    cents: 53.454565 as Cents,
                },
                {
                    pitch: {
                        vector: [-14, 5, 2, -1, -1, 1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7, 2.5, 1, -0.5, -0.5, 0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.031606 as Decimal<Irrational>,
                    cents: 53.870827 as Cents,
                },
                {
                    pitch: {
                        vector: [12, -6, 1, -3, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [6, -3, 0.5, -1.5, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.031872 as Decimal<Irrational>,
                    cents: 54.316825 as Cents,
                },
                {
                    pitch: {
                        vector: [17, -4, 0, -2, 0, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [8.5, -2, 0, -1, 0, 0, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.032128 as Decimal<Irrational>,
                    cents: 54.746305 as Cents,
                },
                {
                    pitch: {
                        vector: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7.5, 4.5, 0.5, 0, 0.5, 0, 0, 0, 0, 0, -0.5] as Vector<Irrational>,
                    decimal: 1.032336 as Decimal<Irrational>,
                    cents: 55.095545 as Cents,
                },
                {
                    pitch: {
                        vector: [-28, 16, 1, -1, 2, -1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-14, 8, 0.5, -0.5, 1, -0.5] as Vector<Irrational>,
                    decimal: 1.03254 as Decimal<Irrational>,
                    cents: 55.438022 as Cents,
                },
                {
                    pitch: {
                        vector: [-14, 5, 1, 0, 1, -1, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-7, 2.5, 0.5, 0, 0.5, -0.5, 0.5] as Vector<Irrational>,
                    decimal: 1.032826 as Decimal<Irrational>,
                    cents: 55.917204 as Cents,
                },
                {
                    pitch: {
                        vector: [-9, 2, 2, -1, 0, 0, 1] as Vector,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                    vector: [-4.5, 1, 1, -0.5, 0, 0, 0.5] as Vector<Irrational>,
                    decimal: 1.033074 as Decimal<Irrational>,
                    cents: 56.333466 as Cents,
                },
            ]
            expect(actual).toBeCloseToObject(expected)
        })
    })
})
