import axios from 'axios'
import { Modal, message } from 'antd'
import Nprogress from 'nprogress'


const BASE_URL = process.env.REACT_APP_PROXY_URL === 'dev' ? 'https://api.anothermars.cn' : 'https://api.anothermars.cn';
axios.defaults.timeout = 12000;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';


// 请求拦截
axios.interceptors.request.use((config) => {
    Nprogress.start()
    // 不需要TOken接口
    if (!config.url.includes('')) {
        config.headers['token'] = sessionStorage.getItem('token') || ''
    }
    // 文件上传，修改请求头部为表单
    if (config.url.includes('')) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config;
}, error => {
    Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    Nprogress.done()
    if (response.status === 200) {
        return Promise.resolve(response.data)
    } else {
        message.error(JSON.stringify(response.data.message))
        Promise.reject(response.data.message)
    }
}, error => {
    Nprogress.done()
    Modal.warn({
        title: '提示',
        content: error.message
    })
})


const http = (options = { method: 'GET' }) => {
    return new Promise((resolve, reject) => {
        axios({
            method: options.method,
            url: options.url,
            data: options.data,
            params: options.params || ''
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export default http;
