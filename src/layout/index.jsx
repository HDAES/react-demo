import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import MyMenu from './menu'
import MyHeader from './header'
import { changeCollapsed } from '@/redux/action/index'
import './layout.less'
const { Sider, Content } = Layout;

function MyLayout({collapsed, dispatch}) {
    return (
        <Layout style={{ minHeight: '100vh' }} className="my-layout">
            <Sider collapsible collapsed={collapsed} onCollapse={()=>dispatch(changeCollapsed(!collapsed))}>
                <MyMenu/>
            </Sider>
            <Layout>
                <MyHeader/>
                <Scrollbars autoHide>
                    <Content style={{padding:20}}>
                        13212
                    </Content>
                </Scrollbars>
            </Layout>
        </Layout>
    )
}
const mapStateToProps = state =>{
    return {
        collapsed: state.collapsed
    }
}
export default connect(mapStateToProps)(MyLayout)
