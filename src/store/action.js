import { INCREASE} from './constants'

// 这里的方法返回一个action对象
export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}
