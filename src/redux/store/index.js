import { createStore } from 'redux'
import reducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


let store = () =>
    process.env.REACT_APP_PROXY_URL === 'dev' ? 
    createStore(reducer, composeWithDevTools()) 
    :createStore(reducer) 

export default store