import {ActiveSheet, InitSpread,TabType,ActiveTabType} from './actions' // 引入action类型常量名

// 初始化state数据
const initialState = {
    spread: null,
    activeSheet:null,
    tableIndex:1,
    activeTabType:TabType.SPREAD,
    showTabTypes: [TabType.SPREAD,TabType.SHEET,TabType.CELL,TabType.TABLE],
    cell:null
}

// 通过dispatch action进入
export default function (state = initialState, action) {

    switch(action.type) {
        case InitSpread:
            console.log('InitSpread:',action.spread)
            return Object.assign({}, state, {
                spread: action.spread,
                activeSheet:action.spread.getActiveSheet() })
        case ActiveSheet:
            console.log('ActiveSheetAction:',action.sheet)
            return Object.assign({}, state, {
                activeSheet:action.sheet })
        case ActiveTabType:
            console.log('ActiveTabTypeAction:',action.tabType)
            return Object.assign({}, state, {
                activeTabType:action.tabType })
        default:
            return state
    }
}
