import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import spread from './spread' // 引入update这个reducer
import dataSource from './dataSource' // 引入update这个reducer

export default combineReducers({
    spread,
    dataSource
})
