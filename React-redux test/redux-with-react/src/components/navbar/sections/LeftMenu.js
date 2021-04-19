import React from 'react';
import { Menu } from 'antd';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
            <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="utilisateur">
            <a href="/utilisateur">Utilisateurs</a>
            </Menu.Item>
            <Menu.Item key="test">
            <a href="/testpage">Test</a>
            </Menu.Item>
            <Menu.Item key="upload">
            <a href="/video/upload">Upload Video</a>
            </Menu.Item>
            <Menu.Item key="myformations">
            <a href="/myformations">Mes formations</a>
            </Menu.Item>
        </Menu>
    )
}

export default LeftMenu;