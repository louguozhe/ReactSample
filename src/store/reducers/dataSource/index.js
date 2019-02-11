import {} from './actions' // 引入action类型常量名
import {StatDimension,StatIndex} from '../../../mock/dataSource'
// 初始化state数据
const initialState = {
    statDimension: StatDimension,
    statIndex: StatIndex
}

// 通过dispatch action进入
export default function (state = initialState, action) {

    switch(action.type) {
        default:
            return state
    }
}
