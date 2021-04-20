import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { PlusCircleTwoTone } from '@ant-design/icons'

const { SubMenu } = Menu;

function LeftMenu({ mode }) {

    // Récupération du paramètre isAdmin du store auth de Redux
    const { isAdmin } = useSelector(state => state.auth);

    // Fonction qui renvoie le LeftMenu suivant le rôle de l'utilisateur
    const adminRender = () => {
        return isAdmin ? 
        (<>
            <Menu.Item key="dashboard">
                <Link to='/admin/dashboard'>Dashboard</Link>
            </Menu.Item>
            <SubMenu key="formations-submenu" title="Formations">
                <Menu.ItemGroup>
                    <Menu.Item key="formation-sub1">
                        <Link to='/admin/formations'>Mes formations</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/admin/formations/ajout'>Ajouter <PlusCircleTwoTone /></Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </>) 
        : (<>
            <Menu.Item key="home">
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
        </>)
    }

    return (
        <>
            <Menu mode={mode} className='menu-main' >
                {adminRender()}
            </Menu>
        </>
    )
}

export default LeftMenu;
