import { Apotome, APOTOME, HALF_SCALER, Irrational, Multiplier, Name, ScaledVector } from "@sagittal/general"
import {
    BoundType,
    EXTREME_EDA,
    JiNotationBound,
    JiNotationLevelId,
    Tinas,
    ULTRA_EDA,
} from "@sagittal/system"
import { consolidateBoundHistories } from "../../../src/consolidateHistories"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../src/history"
import { RANKS } from "../../../src/ranks"
import { boundEventAnalysisFixture, boundHistoryAnalysisFixture } from "../../helpers/src/fixtures"

describe("consolidateBoundHistories", (): void => {
    it("consolidates bound histories to collapse redundancies per JI notation level and show which bound class events can lead into which events in the next JI notation level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any bound class history this bound class event is a member of is, and membership in the best possible bound class history", (): void => {
        const boundEventAnalysisAGoesToEventCAndD: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: "'/| )/|" as Name<JiNotationBound>,
            pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            exact: false,
        }
        const boundEventAnalysisBGoesToEventC: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.INA_MIDPOINT,
            name: "12.5°58" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [12.5, ULTRA_EDA],
            } as ScaledVector<Irrational, { of: Apotome }>,
            rank: RANKS[BoundType.COMMA_MEAN],
            exact: false,
        }
        const boundEventAnalysisC: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/| )/|" as Name<JiNotationBound>,
            pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            exact: false,
        }
        const boundEventAnalysisD: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "50.5°233" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [50.5, EXTREME_EDA],
            } as ScaledVector<Irrational, { of: Apotome }>,
            rank: RANKS[BoundType.COMMA_MEAN],
            exact: false,
        }
        const boundEventAnalysisCButWithBetterRank: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/| )/|" as Name<JiNotationBound>,
            pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            rank: RANKS[BoundType.COMMA_MEAN],
            exact: false,
        }

        const bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            boundEventAnalyses: [boundEventAnalysisBGoesToEventC, boundEventAnalysisCButWithBetterRank],
            rank: RANKS[BoundType.COMMA_MEAN],
            possible: true,
            tinaError: 0 as Multiplier<Tinas>,
            pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
        }
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [boundEventAnalysisAGoesToEventCAndD, boundEventAnalysisC],
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                possible: true,
                tinaError: 0 as Multiplier<Tinas>,
                pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            },
            bestPossibleBoundHistoryAnalysis,
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [boundEventAnalysisAGoesToEventCAndD, boundEventAnalysisD],
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tinas>,
                pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            },
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [boundEventAnalysisBGoesToEventC],
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                possible: false,
                tinaError: 2.26723955922 as Multiplier<Tinas>,
                pitch: { vector: [], scaler: HALF_SCALER } as ScaledVector<Irrational>,
            },
        ]

        const actual = consolidateBoundHistories(boundHistoryAnalyses, bestPossibleBoundHistoryAnalysis)

        const expected = {
            [JiNotationLevelId.ULTRA]: [
                {
                    boundType: boundEventAnalysisAGoesToEventCAndD.boundType,
                    jiNotationLevel: boundEventAnalysisAGoesToEventCAndD.jiNotationLevel,
                    name: boundEventAnalysisAGoesToEventCAndD.name,
                    pitch: boundEventAnalysisAGoesToEventCAndD.pitch,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                    rankOfBestRankedMemberHistory: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                    nextBoundEvents: [
                        boundEventAnalysisC.name,
                        boundEventAnalysisD.name,
                    ] as Name<JiNotationBound>[],
                },
                {
                    boundType: boundEventAnalysisBGoesToEventC.boundType,
                    jiNotationLevel: boundEventAnalysisBGoesToEventC.jiNotationLevel,
                    name: boundEventAnalysisBGoesToEventC.name,
                    pitch: boundEventAnalysisBGoesToEventC.pitch,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                    rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                    nextBoundEvents: [boundEventAnalysisC.name] as Name<JiNotationBound>[],
                },
            ],
            [JiNotationLevelId.EXTREME]: [
                {
                    boundType: boundEventAnalysisC.boundType,
                    jiNotationLevel: boundEventAnalysisC.jiNotationLevel,
                    name: boundEventAnalysisC.name,
                    pitch: boundEventAnalysisC.pitch,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                    rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                    nextBoundEvents: [] as Name<JiNotationBound>[],
                },
                {
                    boundType: boundEventAnalysisD.boundType,
                    jiNotationLevel: boundEventAnalysisD.jiNotationLevel,
                    name: boundEventAnalysisD.name,
                    pitch: boundEventAnalysisD.pitch,
                    isPossibleBoundHistoryMember: false,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                    rankOfBestRankedMemberHistory: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                    nextBoundEvents: [] as Name<JiNotationBound>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})
