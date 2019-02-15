export const InitSpread = 'InitSpread'
export const ActiveSheet = 'ActiveSheet'
export const ActiveTabType = 'ActiveTabType'
export const TabType = {
    SPREAD:"spread",
    SHEET:"sheet",
    CELL:"cell",
    TABLE:"table",
    STAT:"stat",
    DATA:"data",
    SPARKLINE:"sparklineEx",
    CHART:"chartEx",
    SLICER:"slicer",
    PICTURE:"picture",
    COMMENT:"comment"
}
//DECREASE, GETSUCCESS, REFRESHDATA

export const InitSpreadAction = (spread) => {
    return {
        type: InitSpread,
        spread: spread
    }
}
export const ActiveSheetAction = (sheet) => {
    return {
        type: ActiveSheet,
        sheet: sheet
    }
}

export const ActiveTabAction = (tabType) => {
    return {
        type: ActiveTabType,
        tabType: tabType
    }
}

