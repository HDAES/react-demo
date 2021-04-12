/*
 * @Descripttion: 路由配置
 * @Author: Hades
 * @Date: 2021-04-12 16:14:32
 * @LastEditTime: 2021-04-12 16:21:35
 */

import React from 'react'
import Login from '@/pages/login'
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

const myRouter = () =>{

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login"/>
            </Switch>
        </Router>
    )
} 

export default myRouter;