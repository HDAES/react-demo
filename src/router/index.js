/*
 * @Descripttion: 路由配置
 * @Author: Hades
 * @Date: 2021-04-12 16:14:32
 * @LastEditTime: 2021-04-12 16:21:35
 */

import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import RouterConfig from './router.config'
const myRouter = () =>{
    return (
        <Router>
            <Switch>
                { RouteWithSubRoutes(RouterConfig) }
            </Switch>
        </Router>
    )
} 

export default myRouter;

// 路由递归方法
function RouteWithSubRoutes(RoutesList){
    return RoutesList.map( (item, index) =>{
        if(item.routes){
            return <Route path={item.path} key={index} render={ () =>{
                if(item.component!=null){
                    return <item.component>
                        { RouteWithSubRoutes(item.routes)}
                    </item.component>
                }
            }}/>
        }else{
            return item.auth?<Route  {...item} key={index}/>
            : <Route path={item.path}  render={ () => <Redirect to="/login"/>} key={index}/>
        }
    })
}