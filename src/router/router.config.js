// 路由配置文件
import Layout from '@/layout'
import Login from '@/pages/login'
import A from '@/pages/a'


const RouterConfig = [
    {path: '/', name: 'Layout', component: Layout, auth: true, routes: [
        {path: '/login', name: 'Login', component: Login, auth: true},
        {path: '/a', name: 'A', component: A, auth: true}
    ]}
]

export default RouterConfig