import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { withRouter } from 'react-router-dom';
//import { useSelector } from "react-redux";
import { logout } from './../../api/connexionApi';

// const { Header, Footer, Sider, Content } = Layout;

function NavBar(props) {

    //const user = useSelector(state => state.user);
    const user = {userData: {
        isAuth: true
    }}

    const handleLogout = async() => {
        const res = await logout();
        if (res.status === 200) {
            props.history.push("/login");
        } else {
        alert('Log Out Failed')
        }
    };

    return (
        <>
        <nav className="menu" style={{ zIndex: 5, width: '100%', padding: '0px 5%' }}>
            <div className="menu-logo">
                <Link to='/' className='logo-link' >Skillzy-dev</Link>
            </div>
            <div className="menu__container">
                <Menu mode='horizontal' className='menu-main' >
                    <Menu.Item key="mail">
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="utilisateur">
                        <Link to='/utilisateur'>Utilisateurs</Link>
                    </Menu.Item>
                    <Menu.Item key="test">
                        <Link to='/testpage'>Test</Link>
                    </Menu.Item>
                    <Menu.Item key="upload">
                        <Link to='/video/upload'>Upload Video</Link>
                    </Menu.Item>
                    <Menu.Item key="myformations">
                        <Link to='/myformations'>Mes formations</Link>
                    </Menu.Item>
                </Menu>
                </div>

                {!(user.userData && !user.userData.isAuth) ? 
                    <Menu mode='horizontal' className='menu-log'>
                        <Menu.Item key="mail">
                            <Link to="/login">Connexion</Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Link to="/register">Créer un compte</Link>
                        </Menu.Item>
                    </Menu> : 
                    <Menu mode={props.mode}>
                        <Menu.Item key="logout">
                            <Button type='link' onClick={handleLogout}>Déconnexion</Button>
                        </Menu.Item>
                    </Menu>
                }

            </nav>
        </>
    )
}

export default withRouter(NavBar);
