import { Decimal, Integer, Rank } from "@sagittal/general"
import { BoundType, JI_NOTATION_LEVELS } from "@sagittal/system"

const computeBinaryGradeRepresentationIndex = (
    rank: Decimal<Integer> & Rank<BoundType>,
    index: number,
): number => rank * JI_NOTATION_LEVELS.length + (JI_NOTATION_LEVELS.length - 1 - index)

export { computeBinaryGradeRepresentationIndex }
