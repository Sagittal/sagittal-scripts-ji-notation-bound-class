import {Count, Decimal, Rank, RecordKey} from "@sagittal/general"
import {BoundClassId, BoundType, JiNotationLevelId} from "@sagittal/system"
import {RANKS} from "./ranks"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevelId,
        Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
            Count<Decimal<{integer: true}> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevelId, Record<number, Count<Decimal<{integer: true}> & Rank<BoundType>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevelId,
        Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
            Count<Decimal<{integer: true}> & Rank<BoundType>>>> =
    {} as Record<JiNotationLevelId, Record<number, Count<Decimal<{integer: true}> & Rank<BoundType>>>>

// I would prefer these to live in a constants file but that caused a circular dependency problem
const INITIAL_RANK_COUNTS = {
    [RANKS[BoundType.INA_MIDPOINT]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.COMMA_MEAN]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 0 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
}

const INITIAL_RANK_BOUND_IDS = {
    [RANKS[BoundType.INA_MIDPOINT]]: [],
    [RANKS[BoundType.COMMA_MEAN]]: [],
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: [],
}

const rankCounts: Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
    Count<Decimal<{integer: true}> & Rank<BoundType>>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_COUNTS))

const rankBoundClassIds:
    Record<RecordKey<Decimal<{integer: true}> & Rank<BoundType>>, Array<BoundClassId>> =
    JSON.parse(JSON.stringify(INITIAL_RANK_BOUND_IDS))

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    rankBoundClassIds,
    rankCounts,
    INITIAL_RANK_COUNTS,
    INITIAL_RANK_BOUND_IDS,
}
