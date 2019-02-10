export const InitSpread = 'InitSpread'
export const ActiveSheet = 'ActiveSheet'
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
