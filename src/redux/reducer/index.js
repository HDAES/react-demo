import { TYPE } from "../action";
//得到本地缓存
let lifeData = JSON.parse(localStorage.getItem('lifeData')) || {};
//需要缓存的值
let saveStateKeys = [
    TYPE.NAME
]
//初始化值
const initialState = {
    redux_name: lifeData[TYPE.NAME] ? lifeData[TYPE.NAME] : 'am'
}

const reducer = (state = initialState, action) => {
    saveLifeData(action)
    switch (action.type) {
        case TYPE.NAME:
            return {
                ...state,
                redux_name: action.value
            }
        default:
            return {
                ...state
            }
    }
}

const saveLifeData = ({type,value}) => {
    if (saveStateKeys.indexOf(type) !== -1) {
        let tmp = JSON.parse(localStorage.getItem('lifeData')) || {}
        tmp[type] = value;
        localStorage.setItem('lifeData', JSON.stringify(tmp))
    }
}
export default reducer;