import React from 'react';
import { Menu } from 'antd';
// import { withRouter } from 'react-router-dom';
// import { useSelector } from "react-redux";
import { logout } from '../../../api/connexionApi';

function RightMenu(props) {

    //const user = useSelector(state => state.user)
    const user = {userData: {
        isAuth: true
    }}

    const logoutHandler = async() => {
        const res = await logout();
        if (res.status === 200) {
            props.history.push("/login");
        } else {
        alert('Log Out Failed')
        }
      };

    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/login">Connexion</a>
            </Menu.Item>
            <Menu.Item key="app">
                <a href="/register">Créer un compte</a>
            </Menu.Item>
            </Menu>
        )
    } else {
        return (
            <Menu mode={props.mode}>
            <Menu.Item key="logout">
                <a onClick={logoutHandler}>Déconnexion</a>
            </Menu.Item>
            </Menu>
        )
    }
}

export default RightMenu;
