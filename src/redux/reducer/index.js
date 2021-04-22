import { type } from "../action";

// 获取localStorage值
let lifeData = JSON.parse(localStorage.getItem('lifeData')) || {}

// 需要缓存的值
let saveStateKeys = [
    type.NAME
]
// 初始化值
const initialState = {
    redux_name: lifeData[type.NAME] ? lifeData[type.NAME] : 'am'
}

const reducer = (state = initialState, action) => {
    saveLifeData(action)
    switch (action.type) {
        case type.NAME:
            return {
                ...state,
                redux_name: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

// 缓存到本地方法
const saveLifeData = ({ type, payload }) => {
    if (saveStateKeys.indexOf(type) !== -1) {
        let tmp = JSON.parse(localStorage.getItem('lifeData')) || {}
        tmp[type] = payload;
        localStorage.setItem('lifeData', JSON.stringify(tmp))
    }
}
export default reducer;