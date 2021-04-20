import React from 'react';
import { Menu, Button, Dropdown } from 'antd';
import { SmileTwoTone, ApiTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setUser } from './../../../redux/features/auth';

function RightMenu({ mode }) {

    // Infos utilisateur
    const dispatch = useDispatch();
    const { isAdmin, token } = useSelector(state => state.auth);

    // Fonction temporaire de gestion de la connexion 
    // Elle ne sert qu'à changer le auth state pour simuler l'utilisateur connecté
    // Génération random du booléen isAmin 50/50 (...lol)
    const handleConnect = async() => {
        dispatch(setUser({
            token: 'blabla',
            isAdmin: (Math.random() < 0.5)
        }))
    };

    // Fonction temporaire de gestion de logout
    // Changement du auth state pour simuler l'utilisateur déconnecté
    const handleLogout = async() => {
        dispatch(setUser({
            token: '',
            isAdmin: false
        }))
        // const res = await logout();
        // if (res.status === 200) {
        //     props.history.push("/login");
        // } else {
        // alert('Log Out Failed')
        // }
    };

    // Menu de profil de l'utilisateur connecté
    const userMenu = (
        <Menu>
            <Menu.ItemGroup title={isAdmin ? 'Administrateur' : 'Utilisateur'}>
                <Menu.Item className='profile-dropdown-item' key="profile-drop-1">Item 1</Menu.Item>
                <Menu.Item className='profile-dropdown-item' key="profile-drop-2">Item 2</Menu.Item>
                <Menu.Item className='profile-dropdown-item' key="profile-drop-3">Item 3</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="Logout">
                    <Button type='link' onClick={handleLogout}>Déconnexion</Button><ApiTwoTone />
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );

    // Si l'utilisateur n'a pas de token il n'est pas connecté
    if(!token){
        return(
            <Menu mode={mode} className='menu-log'>
                <Menu.Item key="mail">
                    {/* <Button onClick={handleConnect} type='link'><Link to="/login">Connexion</Link></Button> */}
                    <Button onClick={handleConnect} type='link'>Connexion</Button>
                </Menu.Item>
                <Menu.Item key="app">
                <Button type='link'><Link to="/register">Créer un compte</Link></Button>
                </Menu.Item>
            </Menu>
        )
    }

    // Sinon on suppose qu'il est connecté et on lui donne l'accès au menu de l'utilisateur connecté
    return(
        <>
        {/* Cette partie est visible en wide screen et invisible en small screen */}
        <div className='menu-log profile-toggler wide-screen'>
            <Dropdown.Button 
                style={{ float: 'right' }}
                className="dropdown-btn menu-log"
                overlay={userMenu}
                icon={
                <SmileTwoTone 
                    style={{
                    fontSize: '28px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '50%',
                    }}
                />
                }
            ></Dropdown.Button>
        </div>

        {/* Cette partie est invisible sur wide screen et visible sur small screen*/}
        <div className="user-menu small-screen">
            {userMenu}
        </div>
        </>
    )
}

export default RightMenu;
