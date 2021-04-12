import axios from 'axios'
import { Modal, message } from 'antd'

const BASE_URL = process.env.REACT_APP_PROXY_URL==='dev'? 'https://api.anothermars.cn':'https://api.anothermars.cn';
const instance = (options={method:'GET'}) => {
    return new Promise((resolve, reject) => {
        axios({
            url: BASE_URL + options.url,
            method: options.method,
            timeout: 12000,
            data: options.data,
            headers:{
                'Content-Type': options.isForm ? 'multipart/form-data':'application/json'
            },
            params: (options.data && options.data.params) || '',
        }).then((response) => {
            if (response.status === 200) {
                if ( response.data.code === 200) {
                    resolve(response.data.data)
                } else {
                    reject(response.data)
                    message.error(JSON.stringify(response.data.message))
                }
            }
        }).catch(err => {
            console.log(err)
            Modal.warn({
                title: '提示',
                content: err.message
            })
        })
    })
}
export default instance 