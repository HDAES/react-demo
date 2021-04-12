import api from './api'
import http from './axios'

export function getHome(){
    return http({
        url: api.home
    })
}

