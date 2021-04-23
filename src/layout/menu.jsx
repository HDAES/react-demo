import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

function MyMenu(){
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/login">login</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/a">a</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>nav 3</Menu.Item>
        </Menu>
    )
}

export default MyMenu