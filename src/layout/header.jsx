import React, { useState } from 'react';
import { Layout, Badge, Space, Avatar  } from 'antd';
import { connect } from 'react-redux'
import { changeCollapsed } from '@/redux/action/index'
import {MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined, TagOutlined, FullscreenOutlined, FullscreenExitOutlined, UserOutlined } from '@ant-design/icons';

function MyHeader({collapsed,dispatch}){
    const [fullScreen, setFullScreen] = useState(false)
    // 全屏方法
    const handleFullScreen = () =>{
        let dos = document.documentElement;
        if (fullScreen) {
            if (document.exitFullScreen) {
                document.exitFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setFullScreen(false);
        } else {
            if (dos.requestFullscreen) {
                dos.requestFullscreen();
            } else if (dos.mozRequestFullScreen) {
                dos.mozRequestFullScreen();
            } else if (dos.webkitRequestFullScreen) {
                dos.webkitRequestFullScreen();
            }
            setFullScreen(true);
        }
    }
    return (
        <Layout.Header className="my-header">
           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ()=>dispatch(changeCollapsed(!collapsed))
            })}
            <Space size={20} className="header-nav">
                <Badge count={5} size="small">
                    <BellOutlined style={{fontSize: 24}} />
                </Badge>
                <TagOutlined style={{fontSize: 24}}/>
                {
                    fullScreen? <FullscreenExitOutlined onClick={handleFullScreen} style={{fontSize: 24}}/>:<FullscreenOutlined onClick={handleFullScreen} style={{fontSize: 24}}/>
                }
                <Avatar size={36} icon={<UserOutlined />} />
            </Space>
        </Layout.Header>
    )
}
const mapStateToProps = state =>{
    return {
        collapsed: state.collapsed
    }
}
export default connect(mapStateToProps)(MyHeader)